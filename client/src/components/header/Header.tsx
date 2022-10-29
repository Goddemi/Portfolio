import React from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderBar />
      <HeaderTitle>thisis</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header``;

const HeaderTitle = styled.h1``;
