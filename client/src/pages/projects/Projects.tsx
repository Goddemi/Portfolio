import { useQuery } from "@tanstack/react-query";
import getProjectData from "./api/getProjectData";
import ProjectCarousel from "./ProjectCarousel";
import styled from "styled-components";

const Projects = () => {
  const {
    isLoading,
    error,
    data: projectData,
  } = useQuery(["products"], getProjectData);

  if (isLoading) {
    return <div>Loading.. </div>;
  }

  if (error) console.log(error);

  return (
    <Container>
      {" "}
      <ProjectCarousel data={projectData} />{" "}
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
