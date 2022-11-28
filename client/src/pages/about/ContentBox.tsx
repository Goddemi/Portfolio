import React from "react";
import styled from "styled-components";

type ContentType = {
  keyName?: string;
  value?: string | JSX.Element;
};

interface Props {
  variable: string;
  content: ContentType[];
}

const ContentBox: React.FC<Props> = ({ variable, content }) => {
  return (
    <Container>
      <Declare>const</Declare>
      <Variable> {variable} </Variable>
      <Bracket>= {variable === "My_Five_Keywords" ? "[" : "{"} </Bracket>
      {content.map(({ keyName, value }) => {
        return (
          <>
            {variable !== "My_Five_Keywords" ? (
              <Content key={keyName}>
                <Key>&nbsp;&nbsp; {keyName}&nbsp;:&nbsp;</Key>
                <Value> {value}</Value>
                <Key>,</Key>
              </Content>
            ) : (
              <Content key={keyName}>
                <Value> &nbsp;&nbsp; {value}</Value>
                <Key>,</Key>
              </Content>
            )}
          </>
        );
      })}
      <Bracket>{variable === "My_Five_Keywords" ? "]" : "}"}</Bracket>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  width: 530px;
  height: 250px;
  margin: 10px 30px;
  padding: 20px;

  border-radius: ${(props) => props.theme.radius};
  span {
    font-size: 18px;
  }
`;

const Declare = styled.span`
  color: ${(props) => props.theme.purple};
`;

const Variable = styled.span``;

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
  line-height: 25px;
  color: ${(props) => props.theme.green};
`;
