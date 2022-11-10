import React from "react";
import styled from "styled-components";

import ProjectType from "./type/ProjectType";

const Description: React.FC<ProjectType> = ({
  summary,
  mainFunction,
  skills,
  git,
  result,
}) => {
  return (
    <Container>
      <Summary>{summary}</Summary>
      <Box>
        <span>주오 기능 : </span>
        <span>{mainFunction}</span>
      </Box>
      <Box>
        <span>사용된 기술 : </span>
        <span>{skills}</span>
      </Box>

      <Box>
        <span>Git : </span>
        <span>{git}</span>
      </Box>

      <Box>
        <span>결과물</span>
        <span>{result}</span>
      </Box>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  width: 400px;
  margin-left: 30px;
`;

const Summary = styled.div`
  background-color: aqua;
  word-wrap: break-word;
  line-height: 20px;
`;

const Box = styled.div`
  margin: 10px 0;
`;
