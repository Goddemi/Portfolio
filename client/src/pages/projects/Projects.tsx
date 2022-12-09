import { useQuery } from "@tanstack/react-query";
import ProjectCarousel from "./ProjectCarousel";
import styled from "styled-components";
import fetchedProjectData from "./api/getProjectData";

const Projects = () => {
  const {
    isLoading,
    error,
    data: projectData,
  } = useQuery(["products"], () => fetchedProjectData, {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <div>Loading.. </div>;
  }

  if (error) {
    return <div>something is wrong</div>;
  }

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
