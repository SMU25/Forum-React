import React from "react";

import { Error } from "./style";
import { InputItem } from "./InputItem";
import { Button } from "components";

export const AuthForm = ({ itemsInput, buttonName }) => {
  return (
    <form>
      {Array.from({ length: itemsInput }).map((item) => (
        <InputItem key={item} />
      ))}
      {true && <Error>Email already registered!</Error>}

      <Button type="submit" width="XXL" height="M" margin="15px 0 0">
        {buttonName}
      </Button>
    </form>
  );
};
