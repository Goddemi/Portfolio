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
        <Key>주요 기능 : </Key>
        {mainFunction.map((ele: any) => (
          <div>- {ele}</div>
        ))}
      </Box>
      <Box>
        <Key>사용된 기술 : </Key>
        {skills.map((skill) => {
          return <Skill>{skill}</Skill>;
        })}
      </Box>

      <Box>
        <Key>Git : </Key>
        <a href={git}>{git}</a>
      </Box>

      {result ? (
        <Box>
          <Key>결과물</Key>
          <span>{result}</span>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Description;

const Container = styled.div`
  width: 400px;
  margin-left: 30px;
  line-height: 25px;
`;

const Summary = styled.div`
  word-wrap: break-word;
`;

const Box = styled.div`
  margin: 10px 0;

  a {
    color: black;
  }
`;

const Key = styled.div`
  font-weight: bold;
`;
const Skill = styled.div`
  display: inline-block;
  margin: 2px 3px;
  padding: 0px 3px;
  color: whitesmoke;
  background-color: ${(props) => props.theme.blue};
  border-radius: 5px;
`;
