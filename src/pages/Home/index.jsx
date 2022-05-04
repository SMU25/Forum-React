import React from "react";
import { Outlet } from "react-router";

import { Main, Navbar, Content } from "./style";
import { Search, Menu } from "components";
import { menuItems } from "components/Menu/constants";

export const Home = () => {
  return (
    <Main>
      <Navbar>
        <Search />
        <Menu title="Menu" menuItems={menuItems} />
        {false && <Menu title="PERSONAL NAVIGATOR" />}
      </Navbar>
      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};
