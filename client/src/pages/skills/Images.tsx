import React from "react";
import styled from "styled-components";
import { SkillDataType } from "./type/SkillType";

const Images = ({ skillData }: { skillData: SkillDataType | undefined }) => {
  return (
    <Container>
      <Mac src={process.env.PUBLIC_URL + "/reserve/imgs/macImg.png"} />
      {skillData?.map(({ img_url, top, left, width }, i) => {
        return (
          <Sticker
            key={i}
            src={process.env.PUBLIC_URL + img_url}
            style={{ width, top, left }}
          />
        );
      })}
    </Container>
  );
};

export default Images;

const Container = styled.div`
  position: relative;
`;

const Mac = styled.img``;

const Sticker = styled.img`
  position: absolute;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
