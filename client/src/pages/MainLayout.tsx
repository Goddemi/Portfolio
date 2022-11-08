import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

const MainLayout: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Section>
        <Header></Header>
        <Article>
          <Outlet></Outlet>
        </Article>
      </Section>
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  display: flex;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  color: white;
`;

const Article = styled.article`
  display: flex;
  justify-content: center;
`;
