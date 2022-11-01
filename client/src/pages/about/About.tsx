import React from "react";
import styled from "styled-components";
import Declaration from "../../components/declaration/Declaration";
import Archiving from "./Archiving";
import Introduce from "./Introduce";

const About: React.FC = () => {
  return (
    <Container>
      <Declaration variable={"me"} content={<Introduce />} />
      <Declaration variable={"Archiving"} content={<Archiving />} />
    </Container>
  );
};

export default About;

const Container = styled.div`
  color: white;
`;
