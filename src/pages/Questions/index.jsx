import React from "react";

import { Wrapper, Posts } from "./style";
import { Sorting, Post } from "components";

export const Questions = () => {
  return (
    <Wrapper>
      <Sorting />
      <Posts>
        {Array.from({ length: 4 }).map((item, index) => (
          <Post key={index} />
        ))}
      </Posts>
    </Wrapper>
  );
};
