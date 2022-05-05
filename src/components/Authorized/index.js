import React from "react";

import { Wrapper, Notification, Profile, Karma } from "./styled";
import { Button } from "components";
import { ReactComponent as Bell } from "assets/bell.svg";
import ava from "assets/profile-pic.jpg";

export const Authorized = () => {
  return (
    <Wrapper>
      <Button width="XL" height="M" icon={"plusCircle"}>
        Ask a question
      </Button>
      <Notification>
        <Bell />
      </Notification>
      <Profile>
        <img src={ava} alt="avatar" />
        <Karma>0</Karma>
      </Profile>
    </Wrapper>
  );
};
