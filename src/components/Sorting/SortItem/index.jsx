import React from "react";

import { Wrapper } from "./style";

export const SortItem = ({
  Icon,
  name,
  color,
  isActiveItem,
  setIsActiveItem,
}) => {
  return (
    <Wrapper
      onClick={() => setIsActiveItem(name)}
      isActiveItem={isActiveItem === name}
      color={color}
    >
      <Icon />
      {name}
    </Wrapper>
  );
};
