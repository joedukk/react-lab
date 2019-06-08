import React from "react";
import Wrapper from "./styled";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className="title">React Lab</div>
      <nav role="navigation">
        <ul>
          <li>
            <NavLink activeClassName="is-active" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/settings">
              Settings
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink activeClassName="is-active" to="/settings/user">
                  User Profile
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="is-active" to="/settings/about">
                  About
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
