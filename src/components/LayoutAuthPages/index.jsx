import React from "react";
import { Wrapper, Info, Title, Description } from "./style";
import { AuthForm } from "components/AuthForm";

export const LayoutAuthPages = ({
  title,
  description,
  itemsInput,
  buttonName,
  img,
}) => {
  return (
    <Wrapper>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <AuthForm itemsInput={itemsInput} buttonName={buttonName} />
      </Info>
      <img src={img} alt="img" />
    </Wrapper>
  );
};
