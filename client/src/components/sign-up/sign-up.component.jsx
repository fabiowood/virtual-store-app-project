import React, { useState } from "react";
import { connect } from 'react-redux';
import "./sign-up.styles.scss";

//Components Dependencies

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities'; => replaced by reudx-saga!

const SignUp = ({ signUpStart }) => {

  const [userData, setUserSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async event => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("Password don't match. Try again");
      return;
    } else {
      await signUpStart(email, password, displayName);
    }
  }
    
  const handleChange = event => {
    const { name, value } = event.target;
    setUserSignUp({
      ...userData,
      [name]: value
    })
  };

  return (
    <article className="sign-up">
      <h2>I do not have an account!</h2>
      <span>Sign-up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={displayName}
          required
          handleChange={handleChange}
          name='displayName'
          label='Display Name'
        />
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
        <FormInput
          type="password"
          value={confirmPassword}
          required
          handleChange={handleChange}
          name='confirmPassword'
          label='Confirm Password'
        />
        <div className='buttons'>
          <CustomButton type="submit" >SIGN UP</CustomButton>
        </div>
      </form>
    </article>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName})),
})

export default connect(null, mapDispatchToProps)(SignUp);