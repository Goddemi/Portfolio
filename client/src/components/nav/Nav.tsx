import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav: React.FC = () => {
  const navigation = [
    { name: "about", to: "/" },
    { name: "projects", to: "/projects" },
    { name: "skills", to: "/skills" },
  ];

  return (
    <>
      <NavSpace>
        {navigation.map((ele) => (
          <NavLink to={ele.to}>{ele.name}</NavLink>
        ))}
      </NavSpace>
      ;
    </>
  );
};

export default Nav;

const NavSpace = styled.nav``;
