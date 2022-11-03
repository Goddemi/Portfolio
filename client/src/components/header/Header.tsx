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
      : "Portfolio";

  //nav메뉴를 클릭하면 이동하듯이, header바를 클릭하면 이동하기 때문에 같은 값으로 활용할 수 있겠다.

  return (
    <HeaderContainer>
      <HeaderBar title={title === "Portfolio" ? " " : title} />
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
