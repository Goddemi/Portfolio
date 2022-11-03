import React from "react";
import styled from "styled-components";
import mac from "./mac.png";

const Skills = () => {
  return (
    <Container>
      <Mac src={mac}></Mac>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  margin-top: 20px;
`;

const Mac = styled.img``;
const ReactImg = styled.img`
  position: absolute;
`;
