import React from "react";
import styled from "styled-components";

type Content = {
  keyName?: any;
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
      <Bracket>= {variable === "introduce" ? "[" : "{"} </Bracket>
      {content.map(({ keyName, value }) => {
        return (
          <Content>
            {variable !== "introduce" ? (
              <>
                <Key>&nbsp;&nbsp; {keyName}&nbsp;:&nbsp;</Key>
                <Value> {value}</Value>
                <Key>,</Key>
              </>
            ) : (
              <>
                <Value> &nbsp;&nbsp; {value}</Value>
                <Key>,</Key>
              </>
            )}
          </Content>
        );
      })}
      <Bracket>{variable === "introduce" ? "]" : "}"}</Bracket>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  width: 550px;
  height: 300px;
  margin: 10px 30px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: ${(props) => props.theme.radius};
  span {
    font-size: 17px;
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
  line-height: 22px;
  color: ${(props) => props.theme.green};
`;
