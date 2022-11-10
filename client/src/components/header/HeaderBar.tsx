import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string | " ";
}

const HeaderBar: React.FC<Props> = ({ title }) => {
  return (
    <Content>
      <NavLink className="navLink" to={"/"}>
        portfolio{" "}
      </NavLink>
      <BsChevronCompactRight />
      <span className="navLink">{title}</span>
    </Content>
  );
};

export default HeaderBar;

const Content = styled.div`
  display: flex;
  padding: 10px;
  font-size: 18px;
  color: gray;

  .navLink {
    cursor: pointer;

    &:visited {
      color: gray;
    }
    &:hover {
      color: white;
    }
  }
`;
