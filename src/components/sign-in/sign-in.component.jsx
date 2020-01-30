import React, { useState } from "react";
import { connect } from 'react-redux';
import "./sign-in.styles.scss";

//Components Dependencies

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth , signInWithGoogle } from '../../firebase/firebase.utilities'; => replaced by redux-saga!
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  
  const [userCredentials, setUserCredentials] = useState({
    email: '', password: ''
  })
  
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    await emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials, [name]: value})
  };
  
  return (
    <article className="sign-in">
      <h2>I already have an account!</h2>
      <span>Sign-in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          required
          handleChange={handleChange}
          name='email'
          label='Email'
        />
        <FormInput
          type="password"
          value={password}
          required
          handleChange={handleChange}
          name='password'
          label='Password'
        />
        <div className='buttons'>
          <CustomButton type="submit" >SIGN IN</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </article>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
