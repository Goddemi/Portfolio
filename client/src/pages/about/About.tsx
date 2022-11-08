import React from "react";
import styled from "styled-components";
import Declaration from "./Declaration";
import Archive from "./Archive";
import Introduce from "./Introduce";

const About: React.FC = () => {
  return (
    <Container>
      <Declaration variable="ME" content={<Introduce />} />
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: 0 20px;
  color: white;
`;
