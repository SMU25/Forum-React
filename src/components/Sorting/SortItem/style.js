import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActiveItem }) =>
    isActiveItem ? "var(--blue-color)" : "var(--gray-color)"};
  margin: 0 10px 0 0;
  padding: 5px 10px;
  color: ${({ isActiveItem }) =>
    isActiveItem ? "white" : "var(--dark-gray-color)"};
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-transform: capitalize;
  border-radius: 100px;
  cursor: pointer;

  & svg {
    margin: 0 5px 0 0;
    path {
      fill: ${({ isActiveItem, color }) => (isActiveItem ? color : "")};
      stroke: ${({ isActiveItem, color = "white" }) =>
        isActiveItem ? color : "var(--dark-gray-color)"};
    }
  }
`;
