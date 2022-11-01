import React from "react";
import styled from "styled-components";

const Introduce = () => {
  const name = { name: "이강철", age: 32 };
  return (
    <Content>
      <Key>name :</Key>
      <Value>'이강철'</Value>
      <Key>, age :</Key>
      <Value>32</Value>
    </Content>
  );
};

export default Introduce;

const Content = styled.div`
  margin: 20px;
  color: white;
`;

const Key = styled.span`
  color: white;
`;

const Value = styled.span`
  color: ${(props) => props.theme.green};
`;
