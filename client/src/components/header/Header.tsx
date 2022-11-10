import React from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderBar title={title === "안녕하세요 !" ? " " : title} />
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

const HeaderTitle = styled.div`
  padding-top: 50px;
  text-align: center;
`;
