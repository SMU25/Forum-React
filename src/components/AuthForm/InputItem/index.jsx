import React, { useState } from "react";

import { Wrapper, Label, Input, VisibilityBox } from "./style";
import { ReactComponent as Check } from "assets/check.svg";
import { ReactComponent as XCicrcle } from "assets/x-circle.svg";
import { ReactComponent as Hidden } from "assets/hidden.svg";
import { ReactComponent as Visible } from "assets/view.svg";

export const InputItem = ({ formik, id, name, type, labelText, required }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Label htmlFor={id}>{required ? labelText + "*" : labelText}</Label>
      <Input
        id={id}
        name={name}
        type={visible ? "text" : type}
        value={formik.values[name]}
        error={formik.errors[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {!!formik.errors[name] && formik.touched[name] ? <XCicrcle /> : <Check />}
      <VisibilityBox>
        {type === "password" &&
          (visible ? (
            <Visible onClick={() => setVisible(false)} />
          ) : (
            <Hidden onClick={() => setVisible(true)} />
          ))}
      </VisibilityBox>
    </Wrapper>
  );
};
