import styled from "styled-components";

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-bottom: 1px solid #ddd;

  .title {
  }

  nav {
    ul {
      list-style: none;
      margin: 0px;
      padding-left: 0px;
    }

    > ul {
      display: flex;
    }

    li {
      display: block;
      position: relative;
      transition-duration: 0.5s;
      padding: 1rem;
      text-decoration: none;
    }

    li:hover {
      cursor: pointer;
    }

    li ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 1rem;
      left: 0;
      display: none;
    }

    li:hover > ul,
    li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }

    ul li ul li {
      clear: both;
      width: 100%;

      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }
`;

export default Wrapper;
