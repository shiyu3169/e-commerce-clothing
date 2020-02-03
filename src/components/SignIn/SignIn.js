import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userAction';

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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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
            <Button onClick={googleSignInStart} type='button' isGoogleSignIn>
              Sign in with Google
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
