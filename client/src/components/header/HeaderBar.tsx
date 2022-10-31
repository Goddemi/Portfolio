import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import styled from "styled-components";

const HeaderBar: React.FC = () => {
  return (
    <Content>
      portfolio{" "}
      <div>
        <BsChevronCompactRight />
      </div>{" "}
      About me
    </Content>
  );
};

export default HeaderBar;

const Content = styled.div`
  display: flex;
  padding: 10px;
  font-size: 18px;
  color: gray;
`;
