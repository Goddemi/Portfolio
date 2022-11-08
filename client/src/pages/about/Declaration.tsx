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
      <span className="declare">const</span>
      <span className="variable"> {variable} </span>
      <span className="bracket">= {"{"} </span>
      <span>{content} </span>
      <span className="bracket">{"}"}</span>
    </Box>
  );
};

export default Declaration;

const Box = styled.div`
  margin-bottom: 40px;
  span {
    font-size: 30px;
  }

  .declare {
    color: ${(props) => props.theme.purple};
  }
  .variable {
    color: white;
  }
  .bracket {
    color: ${(props) => props.theme.purple};
  }
`;
