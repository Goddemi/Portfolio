import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  path: string | " ";
}

const HeaderBar: React.FC<Props> = ({ path }) => {
  return (
    <Content>
      <span>portfolio </span>
      <div>
        <BsChevronCompactRight />
      </div>{" "}
      <span>{path}</span>
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
