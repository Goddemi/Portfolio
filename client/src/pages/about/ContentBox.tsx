import React from "react";
import styled from "styled-components";

type Content = {
  keyName: any;
  value: any;
};

interface Props {
  variable: string;
  content: Content[];
}

const ContentBox: React.FC<Props> = ({ variable, content }) => {
  return (
    <Container>
      <Declare>const</Declare>
      <Variable> {variable} </Variable>
      <Bracket>= {"{"} </Bracket>
      {content.map(({ keyName, value }) => {
        return (
          <Content>
            {" "}
            <Key>{keyName} : </Key>
            <Value>{value} </Value>
          </Content>
        );
      })}
      <Bracket>{"}"}</Bracket>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  width: 550px;
  height: 300px;
  margin: 10px 30px;
  padding: 10px 10px;
  border: 1px solid navy;
  border-radius: ${(props) => props.theme.radius};
  span {
    font-size: 20px;
  }
`;

const Declare = styled.span`
  color: ${(props) => props.theme.purple};
`;

const Variable = styled.span`
  color: white;
`;

const Bracket = styled.span`
  color: ${(props) => props.theme.purple};
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Key = styled.span`
  color: gray;
`;

const Value = styled.span`
  color: ${(props) => props.theme.green};
`;
