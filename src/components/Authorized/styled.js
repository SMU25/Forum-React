import styled from "styled-components";
import vector from "assets/Vector.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Notification = styled.div`
  margin: 0 30px;
  & svg {
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  position: relative;
  cursor: pointer;
  &::before {
    content: url(${vector});
    position: absolute;
    left: 64px;
    top: 22px;
  }
`;

export const Karma = styled.div`
  position: absolute;
  top: 0;
  left: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 15px;
  background-color: var(--orange-color);
  color: white;
  font-size: 10px;
  line-height: 12px;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
`;
