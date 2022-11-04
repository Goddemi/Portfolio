import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

interface Navigation {
  name: string;
  to: string;
}
const Nav: React.FC = () => {
  const navigation: Array<Navigation> = [
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
  ];

  return (
    <>
      <NavSpace>
        <NavContent>
          <NavLink to={"/"} className="navLink">
            Portfolio
          </NavLink>
        </NavContent>
        {navigation.map(({ name, to }) => (
          <NavContent key={name}>
            <NavLink to={to} className="navLink">
              <BsChevronDown /> {name}
            </NavLink>
          </NavContent>
        ))}
      </NavSpace>
    </>
  );
};

export default Nav;

const NavSpace = styled.nav`
  background-color: #181925;
  width: 300px;
  height: 100vh;
`;

const NavContent = styled.div`
  padding: 20px 40px;
  font-size: 20px;

  &:first-child {
    padding-left: 30px;
  }

  .navLink {
    text-decoration-line: none;
  }

  .navLink:visited {
    color: white;
  }
`;
