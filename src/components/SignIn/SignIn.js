import React, { Component } from "react";
import "./SignIn.scss";
import { signInWithGoogle } from "../../firebase/utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} type="button">
            Sign in with Google
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
