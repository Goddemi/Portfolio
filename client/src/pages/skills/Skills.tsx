import React from "react";
import styled from "styled-components";
import Description from "./Descripton";
import mac from "./mac.png";

const Skills = () => {
  return (
    <Container>
      <Mac src={mac}></Mac>
      <Description />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Mac = styled.img`
  margin-right: 60px;
`;
