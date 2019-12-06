import React from 'react';
import './sign-in-and-sign-up.styles.scss';

// Components Dependencies

import SignIn from '../../components/sign-in/sign-in.component';

const SignInSignUpPage = () => {
    return(
      <section className='sign-in-and-sign-up'>
        <SignIn />      
      </section>
    )
}

export default SignInSignUpPage;