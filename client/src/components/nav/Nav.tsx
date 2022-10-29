import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Navigation {
  name: string;
  to: string;
}

const Nav: React.FC = () => {
  const navigation: Array<Navigation> = [
    { name: "about", to: "/" },
    { name: "projects", to: "/projects" },
    { name: "skills", to: "/skills" },
  ];

  return (
    <>
      <NavSpace>
        <NavContent> Portfolio</NavContent>
        {navigation.map(({ name, to }) => (
          <NavContent>
            <NavLink to={to}>{name}</NavLink>
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
  background-color: gray;
  font-size: 20px;
  &:first-child {
    padding-left: 30px;
  }
`;
