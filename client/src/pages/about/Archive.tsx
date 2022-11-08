import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
const Archive = () => {
  return (
    <Container>
      <a href="https://github.com/Goddemi">
        <BsGithub /> Github
      </a>

      <a href="https://goddemi.tistory.com/">
        <SlNote /> Blog
      </a>
    </Container>
  );
};

export default Archive;

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;
