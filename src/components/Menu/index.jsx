import React from "react";
import { NavLink } from "react-router-dom";

import { Wrapper } from "./style";

export const Menu = ({ title, menuItems }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.href}>
            <NavLink to={item.href}>
              <img src={item.icon} alt={item.name} />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
