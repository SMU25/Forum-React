import React from "react";

import { Wrapper, Label, Input } from "./style";
import { ReactComponent as Check } from "assets/check.svg";
import { ReactComponent as XCicrcle } from "assets/x-circle.svg";

export const InputItem = () => {
  return (
    <Wrapper>
      <Label>Username</Label>
      <Input type="text" value="azakost" />
      {false ? <XCicrcle /> : <Check />}
    </Wrapper>
  );
};
