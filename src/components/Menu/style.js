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
      a {
        display: flex;
        align-items: center;
        height: 41px;
        padding: 0 0 0 50px;
      }
      img {
        margin: 0 12px 0 0;
      }

      &:hover {
        background-color: var(--rose-white-color);
        a {
          padding: 0 0 0 45px;
          border-left: 5px solid var(--orange-color);
        }
        svg g {
        }
      }
    }
  }

  & .active {
    padding: 0 0 0 45px;
    border-left: 5px solid var(--orange-color);
  }
`;
