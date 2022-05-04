import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0 0;
  text-tarnsform: capitalize;

  & h3 {
    margin: 0 12px 0 50px;
    color: var(--dark-gray-color);
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
  & ul {
    li {
      width: 100%;
      font-weight: 700;
      font-size: 13px;
      line-height: 15px;
      margin: 10px 0 0;
      a {
        display: flex;
        align-items: center;
        height: 41px;
        padding: 0 0 0 50px;
      }
      svg {
        margin: 0 12px 0 0;
      }

      &:hover {
        a {
          background-color: var(--rose-white-color);
          padding: 0 0 0 45px;
          border-left: 5px solid var(--orange-color);
        }

        & svg path {
          stroke: var(--orange-color);
        }
      }
    }
  }

  & .active {
    background-color: var(--rose-white-color);
    padding: 0 0 0 45px;
    border-left: 5px solid var(--orange-color);
    & svg path {
      stroke: var(--orange-color);
    }
  }
`;
