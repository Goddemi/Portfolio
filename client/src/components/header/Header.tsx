import React from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

//About me

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderBar />
      <HeaderTitle>
        <h1>//About me</h1>
        {/* <span>const </span>
        <span>이강철</span>
        <span> = {"{  }"}</span> */}
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header``;

const HeaderTitle = styled.h1`
  padding-top: 50px;
  text-align: center;
`;
