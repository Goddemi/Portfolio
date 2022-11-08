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
      { keyName: "name", value: "이 강철" },
      { keyName: "introduce", value: "어쩌구저쩌구" },
    ],
  },
  {
    variable: "introduce",
    content: [
      { keyName: "name", value: "이 강철" },
      { keyName: "introduce", value: "어쩌구저쩌구" },
    ],
  },
  {
    variable: "archive",
    content: [
      { keyName: "name", value: "이 강철" },
      { keyName: "introduce", value: "어쩌구저쩌구" },
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
