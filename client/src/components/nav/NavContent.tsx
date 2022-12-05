import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuData } from "./data/MenuData";
import styled from "styled-components";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const NavContent = ({ menuData }: { menuData: MenuData[] }) => {
  let init: { [key: string]: boolean } = {}; //reduce에서 type
  const subMenuOpenKey = menuData.reduce((acc, cur): {} => {
    acc[cur.name] = false;
    return acc;
  }, init);

  const [isOpen, setIsOpen] = useState(subMenuOpenKey);

  const menuToggle = (name: string) => {
    let newOpen = { ...isOpen };
    newOpen[name] = !newOpen[name];
    setIsOpen(newOpen);
  };

  return (
    <>
      {menuData.map(({ name, to, details }) => {
        return (
          <NavMenu
            key={name}
            onClick={(e) => {
              const target = e.target as Element;
              target.innerHTML === name && menuToggle(name);
            }}
          >
            <NavLink to={to} className="navLink">
              <BsChevronDown /> <span>{name}</span>
              {isOpen[name] &&
                details?.map((detail, i) => {
                  return (
                    <NavDetails key={i}>
                      <BsChevronRight />
                      <span>{detail}</span>
                    </NavDetails>
                  );
                })}
            </NavLink>
          </NavMenu>
        );
      })}
    </>
  );
};

export default NavContent;

const NavMenu = styled.div`
  padding: 20px 40px;
  font-size: 20px;
`;

const NavDetails = styled.div`
  padding-top: 10px;
  padding-left: 5px;
  font-size: 14px;
  color: gray;
  cursor: default;

  span {
    &:hover {
      color: white;
    }
  }
`;
