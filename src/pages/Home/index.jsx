import React, { useState } from "react";
import { Outlet } from "react-router";

import { Main, Navbar, OpenCloseButton, Content } from "./style";
import { ReactComponent as ChevronLeft } from "assets/chevron-left.svg";
import { Search, Menu } from "components";
import { menuItems, personalNavigatorItems } from "components/Menu/constants";

export const Home = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Main>
      <Navbar isOpenMenu={isOpenMenu}>
        <OpenCloseButton
          isOpenMenu={isOpenMenu}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <ChevronLeft />
        </OpenCloseButton>
        <Search isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <Menu title="Menu" menuItems={menuItems} isOpenMenu={isOpenMenu} />
        {false && (
          <Menu title="PERSONAL NAVIGATOR" menuItems={personalNavigatorItems} />
        )}
      </Navbar>
      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};
