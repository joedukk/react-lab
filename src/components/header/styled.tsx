import styled from "styled-components";

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-bottom: 1px solid #ddd;

  .title {
  }

  .menu {
    display: flex;
    padding: 0px 10px;

    > .menu-item {
      padding: 0px 10px;

      > a.is-active {
        cursor: default;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
`;

export default Wrapper;
