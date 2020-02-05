import React from "react";

import { CustomButtonContainer } from "./ButtonStyles";

const Button = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default Button;
