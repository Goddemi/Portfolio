import React from "react";
import { BsMailbox } from "react-icons/bs";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <div>
        <BsMailbox />
      </div>
      <a href="mailto:goddemi0124@gmail.com"> goddemi0124@gmail.com</a>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  div {
    font-size: 100px;
  }
`;

const Box = styled.div``;
