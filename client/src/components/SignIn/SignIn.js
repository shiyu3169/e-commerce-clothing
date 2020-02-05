import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userAction';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignInStyle';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          required
          label='email'
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          required
          label='password'
        />
        <ButtonsContainer>
          <Button type='submit'>Sign in</Button>
          <Button onClick={googleSignInStart} type='button' isGoogleSignIn>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
