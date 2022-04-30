import React from "react";

import { Wrapper } from "./style";

import userPlus from "assets/user-plus.svg";
import plusCircle from "assets/plus-circle.svg";
import arrowUp from "assets/arrow-up.svg";
import message from "assets/message-square.svg";
import image from "assets/image.svg";
import send from "assets/send.svg";

export const Button = ({
  children,
  width,
  height,
  bg,
  margin,
  color,
  img,
  disabled,
  onClick,
}) => {
  const setImg = (img) => {
    switch (img) {
      case "userPlus":
        return userPlus;

      case "plusCircle":
        return plusCircle;

      case "arrowUp":
        return arrowUp;

      case "message":
        return message;

      case "image":
        return image;

      case "send":
        return send;

      default:
        return null;
    }
  };

  return (
    <Wrapper
      width={width}
      height={height}
      bg={bg}
      margin={margin}
      color={color}
      disabled={disabled}
      img={img}
      onClick={onClick}
    >
      {img && <img src={setImg(img)} alt={setImg(img)} />}
      {children}
    </Wrapper>
  );
};
