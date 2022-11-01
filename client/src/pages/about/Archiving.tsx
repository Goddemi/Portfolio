import React from "react";
import styled from "styled-components";

const Archiving = () => {
  return (
    <Container>
      <Box></Box>
      <Box></Box>
    </Container>
  );
};

export default Archiving;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 350px;
  height: 250px;
  margin: 0 80px;
  margin-top: 40px;
  background-color: white;
  border-radius: 30px;
`;
