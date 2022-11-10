import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Images from "./Images";
import { PROJECT_DATA } from "./data/ProjectData";

const ProjectCarousel = () => {
  // 나중에 인덱스가 아닌, id 값에 따라서 백엔드에서 다른 값을 가져올 수 있도록 할 수 있겠다.

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <Slider {...settings}>
      {PROJECT_DATA.map(({ name, links }) => {
        return (
          <Project key={name}>
            <Header>- {name} -</Header>
            <Date>2022년 11월</Date>
            <Content>
              <ImageBox>
                <Images imgLinks={links} />
              </ImageBox>
              <DescriptionBox>
                <Description>포트폴리오 사이트</Description>
                <Box>
                  <span>주오 기능 : </span>
                  <span></span>
                </Box>
                <Box>
                  <span>사용된 기술 : </span>
                  <span>Typescript, React, Styled-Components</span>
                </Box>

                <Box>
                  <span>인원 : </span>
                  <span>1명</span>
                </Box>

                <Box>
                  <span></span>
                  <span> 어쩌구 저쩌구</span>
                </Box>
                <Box>
                  <span>Git</span>
                  <span> github.com/Goddemi/35-2nd-myhoneytrip-frontend</span>
                </Box>
                <Box>
                  <span>시연영상</span>
                  <span> www.youtube.com/watch?v=Fys1Xh8m_pE</span>
                </Box>

                <Description>느낀점어ㅣ거다 ~~</Description>
              </DescriptionBox>
            </Content>
          </Project>
        );
      })}
    </Slider>
  );
};

export default ProjectCarousel;

const Project = styled.div`
  padding: 40px 60px;
  color: black;
`;

const Header = styled.div`
  padding-bottom: 30px;
  font-size: 30px;
  text-align: center;
`;

const Date = styled(Header)`
  font-size: 17px;
  color: gray;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 350px;
`;

const DescriptionBox = styled.div`
  margin-left: 40px;
`;

const Description = styled.div`
  line-height: 20px;
`;

const Box = styled.div`
  margin: 10px 0;
`;
