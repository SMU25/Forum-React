import React from "react";

import { ReactComponent as FeatherMore } from "assets/feather_more-vertical.svg";
import ava from "assets/Ava.jpg";

import {
  Wrapper,
  Container,
  Head,
  Author,
  Info,
  UserName,
  PostContent,
  SubMenu,
  Tags,
  Activity,
} from "./style";

export const Post = () => {
  return (
    <Wrapper>
      <Container>
        <Head>
          <Author>
            <img src={ava} alt="" />
            <Info>
              <UserName>Golanginya</UserName>
              <time dateTime="">5 min ago</time>
            </Info>
          </Author>
          <FeatherMore />
        </Head>
        <PostContent>
          <h4>How to patch KDE on FreeBSD?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            aliquet maecenas ut sit nulla
          </p>
        </PostContent>
        <SubMenu>
          <Tags>
            <li>
              <a href="# ">golang</a>
            </li>
            <li>
              <a href="# ">golang</a>
            </li>
            <li>
              <a href="# ">golang</a>
            </li>
          </Tags>
          <Activity>
            <li>
              <img src="" alt="" />
              {125}
            </li>
            <li>
              <img src="" alt="" />
              {15}
            </li>
            <li>
              <img src="" alt="" />
              {155}
            </li>
          </Activity>
        </SubMenu>
      </Container>
    </Wrapper>
  );
};
