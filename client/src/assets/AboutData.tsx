import React from "react";
import { BsGithub } from "react-icons/bs";
import { SlNote } from "react-icons/sl";

const gitHubLink = (
  <a href="https://github.com/Goddemi">https://github.com/Goddemi</a>
);

const blogLink = (
  <a href="https://goddemi.tistory.com/">https://goddemi.tistory.com/</a>
);

export const AboutData = [
  {
    variable: "ME",
    content: [
      { keyName: "name", value: "'이 강철'" },
      { keyName: "MBTI", value: "'INTP'" },
      {
        keyName: "strength",
        value: "['성실함', '이해력', '긍정적', '책임감', '커뮤니케이션 능력']",
      },
      { keyName: <SlNote />, value: blogLink },
      { keyName: <BsGithub />, value: gitHubLink },
    ],
  },
  {
    variable: "introduce",
    content: [
      {
        value:
          "'실력있는 개발자로 성장하고 싶은 욕심이 있습니다. 충분한 시간을 공부에 투자합니다.'",
      },
      {
        value:
          "'새로운 것을 배우기 좋아합니다. 따라만 치는 코딩이 아닌 이해하는 코딩을 하려 노력합니다.'",
      },
      {
        value:
          "'소통을 두려워 하지 않습니다. 의도를 빠르게 이해하고 말하고자 하는 바를 잘 전달합니다.'",
      },
      {
        value:
          "'회사를 통해 성장하고 저 또한 회사에 도움이 되어, 긍정적인 영향을 주고 받을 수 있었으면 좋겠습니다.'",
      },
    ],
  },
  {
    variable: "experience",
    content: [
      { keyName: "위글", value: "'숏폼 영상 커머스 스타트업 인턴 근무'" },
      {
        keyName: "위코드",
        value: "'위코드 코딩부트캠프 프론트엔드 과정 35기 수료'",
      },
      { keyName: "하나투어", value: "'대리점 영업관리직무'" },
      { keyName: "숭실대학교", value: "'글로벌 통상학과 학사 졸업'" },
    ],
  },
  {
    variable: "ETC",
    content: [
      { keyName: <BsGithub />, value: gitHubLink },
      { keyName: <SlNote />, value: blogLink },
    ],
  },
];
