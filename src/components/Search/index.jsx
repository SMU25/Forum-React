import React from "react";

import { Wrapper } from "./style";
import { ReactComponent as SearchIcon } from "assets/search.svg";

export const Search = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <input placeholder="Search" />
    </Wrapper>
  );
};
