import React, { useState } from "react";
import styled from "styled-components";
import Images from "./Images";
import Description from "./Descripton";
import { MY_SKILLS } from "./data/MY_SKILLS";

// import mac from "./mac.png";

const Skills = () => {
  const [skill, setSkill] = useState("<- You can click skills !");

  return (
    <Container>
      <Images />
      {/* <Description name={name} description={description} /> */}
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
