import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Images from "./Images";
import Description from "./Descripton";

import { SkillDataType } from "./type/SkillType";
import { useAxios } from "../../hooks/useAxios";
import { SKILL_URL } from "../../config";

const Skills = () => {
  const { response } = useAxios({
    method: "GET",
    url: SKILL_URL,
  });

  const [skillData, setSkillData] = useState<SkillDataType | undefined>();
  const [skill, setSkill] = useState("<- You can click skills !");

  return (
    <Container>
      {response && console.log(response)}
      <Images />
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
