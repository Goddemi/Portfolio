import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Images from "./Images";
import Description from "./Descripton";
import { SkillDataType } from "./type/SkillType";
import { getSkills } from "./api/getSkills";
import axios from "axios";
import { SKILL_URL } from "../../config";

const Skills = () => {
  const [skillData, setSkillData] = useState<SkillDataType | undefined>();
  const [skill, setSkill] = useState("<- You can click skills !");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(SKILL_URL);
      const data = await response.data;
      setSkillData(data);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  if (isLoading) {
    return <div> Loading...</div>;
  }

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
