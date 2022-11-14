import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Images from "./Images";
import { SkillDataType } from "./type/SkillType";
import { SKILLS_DATA_URL } from "../../config";

const Skills = () => {
  const [skillData, setSkillData] = useState<SkillDataType | undefined>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(SKILLS_DATA_URL);
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
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
