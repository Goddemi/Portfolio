import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { PROJECTS_DATA_URL } from "../../config";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  axios.defaults.withCredentials = true;

  const [projectData, setProjectData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(PROJECTS_DATA_URL);
      const data = response.data;
      setProjectData(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  if (isLoading) {
    return <div>Loading.. </div>;
  }

  return (
    <Container>
      <ProjectCarousel data={projectData} />
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
