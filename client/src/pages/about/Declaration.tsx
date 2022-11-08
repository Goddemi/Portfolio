import React from "react";
import styled from "styled-components";

interface Props {
  variable: string;
  content: any; // 수정해.
}

const Declaration: React.FC<Props> = ({ variable, content }) => {
  return (
    <Box>
      {" "}
      <span>const</span>
      <span> {variable} </span>
      <span>
        = {"{"} {content} {"}"}
      </span>
    </Box>
  );
};

export default Declaration;

const Box = styled.div`
  margin-bottom: 40px;
  span {
    font-size: 30px;
    color: ${(props) => props.theme.purple};

    &:nth-child(2) {
      color: white;
    }
  }
`;
