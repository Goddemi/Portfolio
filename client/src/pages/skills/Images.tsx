import React from "react";
import mac from "./data/macImg.png";
import js from "./data/jsImg.png";
import ts from "./data/tsImg.png";
import reactImg from "./data/reactImg.png";
import reduxImg from "./data/reduxImg.png";
import nodeImg from "./data/nodeImg.png";
import sassImg from "./data/sassImg.png";
import styledImg from "./data/styledImg.png";
import aws from "./data/awsImg.png";
import git from "./data/gitImg.png";
import styled from "styled-components";

const Images = () => {
  return (
    <Container>
      {" "}
      <Mac src={mac} />
      <Js src={js} />
      <Ts src={ts} />
      <ReactImg src={reactImg} />
      <ReduxImg src={reduxImg} />
      <NodeImg src={nodeImg} />
      <Sass src={sassImg} />
      <StyledImg src={styledImg} />
      <Aws src={aws} />
      <Git src={git} />
    </Container>
  );
};

export default Images;

const Container = styled.div`
  position: relative;
`;
const Mac = styled.img`
  margin-right: 60px;
`;

const Js = styled.img`
  position: absolute;
  top: 50px;
  left: 30px;
  width: 250px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Ts = styled(Js)`
  top: 200px;
  left: 20px;
  width: 200px;
`;
const ReactImg = styled(Js)`
  top: 30px;
  left: 300px;
  width: 130px;
`;
const ReduxImg = styled(Js)`
  left: 430px;
  width: 200px;
`;
const NodeImg = styled(Js)`
  top: 350px;
`;
const Sass = styled(Js)`
  top: 350px;
  left: 320px;
  width: 200px;
`;
const StyledImg = styled(Js)`
  top: 250px;
  left: 500px;
  width: 120px;
`;

const Aws = styled(Js)`
  top: 410px;
  left: 550px;
  width: 110px;
`;
const Git = styled(Js)`
  top: 280px;
  left: 200px;
  width: 110px;
`;
