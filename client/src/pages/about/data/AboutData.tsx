import React from "react";
import { BsGithub } from "react-icons/bs";
import { SlNote } from "react-icons/sl";

const gitHubLink = (
  <>
    <BsGithub />{" "}
    <a href="https://github.com/Goddemi">https://github.com/Goddemi</a>
  </>
);

const blogLink = (
  <>
    <SlNote />{" "}
    <a href="https://goddemi.tistory.com/">https://goddemi.tistory.com/</a>
  </>
);

const melonLink = (
  <a href="https://www.melon.com/artist/timeline.htm?artistId=944866">
    MelonLink
  </a>
);

const InstaLink = (
  <>
    <a href="https://www.instagram.com/abraxas1225//">InstagramLink</a>
  </>
);

export const AboutData = [
  {
    variable: "ME",
    content: [
      { keyName: "이름", value: "'이 강철'" },

      {
        keyName: "기술",
        value: "[ 'Js', 'Ts', 'React', 'Redux' ]",
      },
      { keyName: "Blog", value: blogLink },
      { keyName: "Github", value: gitHubLink },
    ],
  },
  {
    variable: "My_Five_Keywords",
    content: [
      { value: "'성실하고 꾸준함" },
      {
        value: "'새로운 것 배우는 것을 즐김'",
      },
      {
        value: "'긍정적인 사고'",
      },
      {
        value: "'문제를 어떻게든 해결함'",
      },
      {
        value: "'핵심을 파악하는 커뮤니케이션'",
      },
    ],
  },
  {
    variable: "Experience",
    content: [
      {
        keyName: "위글",
        value: "'22.08 ~ 22.09 / 숏폼 영상 커머스 스타트업 인턴'",
      },
      {
        keyName: "위코드",
        value: "'22.06 ~ 22.09 / 위코드 프론트엔드 부트캠프 수료'",
      },
      { keyName: "하나투어", value: "'18.02 ~ 22.05 / 대리점 영업관리직무'" },
      {
        keyName: "숭실대학교",
        value: "'10.03 ~ 17.02 / 글로벌 통상학과 학사 졸업'",
      },
    ],
  },
  {
    variable: "ETC",
    content: [
      {
        keyName: "English",
        value: "'원활한 회화 및 읽기 쓰기'",
      },
      {
        keyName: "Books",
        value: "'독서하는 개발자'",
      },
      { keyName: "MBTI", value: "'INTP'" },
      {
        keyName: "Instagram",
        value: InstaLink,
      },
      {
        keyName: "MySongs!",
        value: melonLink,
      },
    ],
  },
];
