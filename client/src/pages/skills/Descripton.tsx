import React from "react";
import styled from "styled-components";

const Description = () => {
  return <Container></Container>;
};

export default Description;

const Container = styled.div`
  height: 550px;
  width: 450px;
  background-color: white;
  border-radius: ${(props) => props.theme.radius};
`;
