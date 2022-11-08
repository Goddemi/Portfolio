import React from "react";
import styled from "styled-components";

const Introduce = () => {
  return (
    <Content>
      <Key>name :</Key>
      <Value>'이 강철'</Value>
      <Key>, introduce : </Key>
      <Value>
        "안녕하세요, 이이이더더 합니다. 허허허허 합니다. 호호호호도도보보
        합니다. 아아아오오오 합니다. "
      </Value>
    </Content>
  );
};

export default Introduce;

const Content = styled.div`
  color: white;
  span {
    display: inline-block;
    padding: 10px 0;
  }
`;

const Key = styled.span`
  color: gray;
`;

const Value = styled.span`
  color: ${(props) => props.theme.green};
`;
