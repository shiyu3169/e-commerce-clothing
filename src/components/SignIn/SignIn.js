import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/utils';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignInStyle';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ email: '', password: '' });
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label='email'
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label='password'
          />
          <ButtonsContainer>
            <Button type='submit'>Sign in</Button>
            <Button onClick={signInWithGoogle} type='button' isGoogleSignIn>
              Sign in with Google
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
