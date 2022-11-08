import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavContent from "./NavContent";

const Nav: React.FC = () => {
  return (
    <>
      <NavSpace>
        <NavHeader>
          <NavLink to={"/"} className="navLink">
            Portfolio
          </NavLink>
        </NavHeader>
        <NavContent />
      </NavSpace>
    </>
  );
};

export default Nav;

const NavSpace = styled.nav`
  background-color: ${(props) => props.theme.navy};
  width: 330px;
  height: 100vh;

  .navLink {
    text-decoration-line: none;
  }

  .navLink:visited {
    color: white;
  }
`;

const NavHeader = styled.div`
  padding: 20px 40px;
  font-size: 20px;
`;
