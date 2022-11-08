import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Greeting from "../components/greeting/Greeting";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

const MainLayout: React.FC = () => {
  const location = useLocation();
  const title =
    location.pathname === "/about"
      ? "About"
      : location.pathname === "/projects"
      ? "Projects"
      : location.pathname === "/skills"
      ? "Skills"
      : location.pathname === "/contact"
      ? "Contact"
      : "안녕하세요 !";

  return (
    <Container>
      <Nav />
      <Section>
        <Header title={title} />
        <Article>
          {location.pathname === "/" && <Greeting />}
          <Outlet />
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
