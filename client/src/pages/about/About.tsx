import React from "react";
import styled from "styled-components";
import { AboutData } from "./data/AboutData";
import ContentBox from "./ContentBox";

const About: React.FC = () => {
  return (
    <Container>
      {AboutData.map(({ variable, content }) => {
        return <ContentBox variable={variable} content={content} />;
      })}
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
`;
