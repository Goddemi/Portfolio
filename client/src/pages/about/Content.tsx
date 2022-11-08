import React from "react";
import styled from "styled-components";

interface Props {
  keyName: string | JSX.Element;
  value: string | JSX.Element;
}

const Content: React.FC<Props> = ({ keyName, value }) => {
  return (
    <Box>
      <Key>{keyName} :</Key>
      <Value>'{value}'</Value>
      <Key>,</Key>
    </Box>
  );
};

export default Content;

const Box = styled.div`
  margin: 20px 0;
`;

const Key = styled.span`
  color: gray;
`;

const Value = styled.span`
  color: ${(props) => props.theme.green};
`;
