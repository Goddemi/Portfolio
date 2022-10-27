import React from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Nav from "./nav/Nav";

const Main = () => {
  return (
    <Container>
      <Nav />
      <Section>
        <Header></Header>
        <Article></Article>
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
  background-color: #0c0c11;
`;

const Article = styled.article``;
