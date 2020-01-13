import React from "react";
import "./Sign.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Sign = () => {
  return (
    <div className="sign">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
