import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Images from "./Images";
import Description from "./Description";

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
      {PROJECT_DATA.map(
        ({ name, links, summary, main_function, skills, git, result }, i) => {
          return (
            <Project key={name}>
              <Header>- {name} -</Header>
              <Content>
                <Images imgLinks={links} />
                <Description
                  summary={summary}
                  mainFunction={main_function}
                  skills={skills}
                  git={git}
                  result={result}
                />
              </Content>
              <Footer>
                {i + 1} / {PROJECT_DATA.length}
              </Footer>
            </Project>
          );
        }
      )}
    </Slider>
  );
};

export default ProjectCarousel;

const Project = styled.div`
  padding: 40px 50px 20px 50px;
  color: black;
`;

const Header = styled.div`
  padding-bottom: 50px;
  font-size: 30px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  margin-top: 35px;
  text-align: center;
`;
