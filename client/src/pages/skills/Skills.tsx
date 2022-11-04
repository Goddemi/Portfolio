import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Images from "./Images";
import Description from "./Descripton";
import { SkillDataType } from "./type/SkillType";
import { getSkills } from "./api/getSkills";

const Skills = () => {
  const [skillData, setSkillData] = useState<SkillDataType | undefined>();
  const [skill, setSkill] = useState("<- You can click skills !");

  useEffect(() => {
    getSkills().then((data) => {
      setSkillData(data);
    });
  }, []);

  return (
    <Container>
      <Images skillData={skillData} />
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
