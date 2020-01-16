import React from "react";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import { SignContainer } from "./SignStyle";

const Sign = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  );
};

export default Sign;
