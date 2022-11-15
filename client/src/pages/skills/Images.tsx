import React from "react";
import styled from "styled-components";
// import { PUBLIC_URL } from "../../config";
import { SkillDataType } from "./type/SkillType";

const Images = ({ skillData }: { skillData: SkillDataType | undefined }) => {
  return (
    <Container>
      <Mac crossOrigin="anonymous" src="/reserve/imgs/macImg.png" />
      {skillData?.map(({ img_url, top, left, width }, i) => {
        return (
          <Sticker
            key={i}
            crossOrigin="anonymous"
            src={img_url}
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
