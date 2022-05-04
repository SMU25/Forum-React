import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 41px;

  & svg {
    margin: 0 12px 0 50px;
    cursor: pointer;
  }
  & input {
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    border: none;
    outline: none;

    &::placeholder {
      color: black;
    }
  }
`;
