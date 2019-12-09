import React, { Component } from "react";
import "./sign-up.styles.scss";

//Components Dependencies

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  // It is necessary to change our handler to 'async', because we will use a method from Firebase, and this is an assyncronous operation (we are calling the Firebase API).

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert("Password don't match. Try again");
      return;
    }
    
    try {

        // We need to use a specific auth method to tell the application that we will have to create a new user. The sintax is precisely as described below:

        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName } )
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        })
      }
      catch(error) {
        console.log(error);
      }
   };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <article className="sign-up">
        <h2>I do not have an account!</h2>
        <span>Sign-up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
            name='displayName'
            label='Display Name'
          />
          <FormInput
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            name='email'
            label='Email'
          />
          <FormInput
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            name='password'
            label='Password'
          />
          <FormInput
            type="password"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
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
}

export default SignUp;