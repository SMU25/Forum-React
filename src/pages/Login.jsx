import React from "react";

import { LayoutAuthPages } from "components";
import loginImage from "assets/login-image.jpg";

export const Login = () => {
  return (
    <LayoutAuthPages
      title="We’ve missed you!"
      description="More than 150 questions are waiting for your wise suggestions!"
      itemsInput={2}
      buttonName="Login"
      img={loginImage}
    ></LayoutAuthPages>
  );
};
