import React from "react";
import styled from "styled-components";

import Content from "./Content";

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
      <span className="declare">const</span>
      <span className="variable"> {variable} </span>
      <span className="bracket">= {"{"} </span>
      {content.map(({ keyName, value }) => {
        return (
          <Declare>
            {" "}
            <span>{keyName} : </span>
            <span>{value} </span>
          </Declare>
        );
      })}
      <span className="bracket">{"}"}</span>
    </Container>
  );
};
// const contents = (
//   <>
//     {" "}
//     <Content keyName="name" value="이 강철" />
//     <Content
//       keyName="introduce"
//       value="안녕하세요, 이이이더더 합니다. 허허허허 합니다. 호호호호도도보보
//     합니다. 아아아오오오 합니다."
//     />
//     <Content keyName={<BsGithub />} value={gitHubLink} />
//     <Content keyName={<SlNote />} value={blogLink} />
//   </>
// );
export default ContentBox;

const Container = styled.div`
  width: 550px;
  height: 300px;
  margin: 10px 30px;
  padding: 10px 10px;
  border: 1px solid navy;
  border-radius: ${(props) => props.theme.radius};
`;

const Declare = styled.div`
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
