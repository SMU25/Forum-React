import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Logo } from "./style";
import { Authorized, Auth } from "components";

import logo from "assets/logo.svg";

export const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <img src={logo} alt="Logo" />
          <h1>
            alem<b>help</b>
          </h1>
        </Logo>
      </Link>
      {true ? <Authorized /> : <Auth />}
    </Wrapper>
  );
};
