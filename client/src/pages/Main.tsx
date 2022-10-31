import React from "react";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

const Main: React.FC = () => {
  const params = useParams();

  return (
    <Container>
      <Nav />
      <Section>
        <Header></Header>
        <Article>
          <Outlet></Outlet>
        </Article>
        {/* // 아티클 자리에 요소들이 들어가면 돼.아웃렛 개념을사용하자. */}
      </Section>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  color: white;
`;

const Article = styled.article``;
