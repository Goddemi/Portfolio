import React from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import HeaderBar from "./HeaderBar";

const Header: React.FC = () => {
  const location = useLocation();
  const title =
    location.pathname === "/about"
      ? "About"
      : location.pathname === "/projects"
      ? "Projects"
      : location.pathname === "/skills"
      ? "Skills"
      : "안녕하세요!";

  return (
    <HeaderContainer>
      <HeaderBar path={title === "안녕하세요!" ? " " : title} />
      <HeaderTitle>
        <h1>{title}</h1>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  margin-bottom: 90px;
`;

const HeaderTitle = styled.h1`
  padding-top: 50px;
  text-align: center;
`;
