import React, { useState } from "react";

import { Wrapper } from "./style";
import { SortItem } from "./SortItem";
import { sortItems } from "./constants";

export const Sorting = () => {
  const [isActiveItem, setIsActiveItem] = useState(null);

  return (
    <Wrapper>
      {sortItems.map((item) => (
        <SortItem
          key={item.name}
          {...item}
          isActiveItem={isActiveItem}
          setIsActiveItem={setIsActiveItem}
        />
      ))}
    </Wrapper>
  );
};
