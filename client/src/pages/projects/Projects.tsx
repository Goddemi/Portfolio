import React from "react";
import styled from "styled-components";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  return (
    <Container>
      <ProjectCarousel />
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 900px;
  height: 600px;

  background-color: white;
  border-radius: 20px;
`;
