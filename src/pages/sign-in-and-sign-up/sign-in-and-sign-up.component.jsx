import React from 'react';
import './sign-in-and-sign-up.styles.scss';

// Components Dependencies

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInSignUpPage = () => {
    return(
      <section className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />    
      </section>
    )
}

export default SignInSignUpPage;