import React from "react";
import Wrapper from "./styled";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className="title">React Lab</div>
      <div className="menu">
        <div className="menu-item">
          <NavLink activeClassName="is-active" to="/dashboard">
            Dashboard
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink activeClassName="is-active" to="/settings">
            Settings
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
