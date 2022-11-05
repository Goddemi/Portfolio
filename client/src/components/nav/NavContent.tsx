import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MENU_DATA } from "./MenuData";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const NavContent = () => {
  const subMenuOpenKey = MENU_DATA.reduce((acc: any, cur) => {
    acc[cur.name] = false;
    return acc;
  }, {});

  const [isOpen, setIsOpen] = useState(subMenuOpenKey);

  const menuToggle = (name: any) => {
    let newOpen = { ...isOpen };
    newOpen[name] = !newOpen[name];
    setIsOpen(newOpen);
  };

  return (
    <>
      {MENU_DATA.map(({ name, to, details }) => {
        return (
          <NavMenu
            key={name}
            onClick={(e) => {
              const target = e.target as Element;
              target.innerHTML == name && menuToggle(name);
            }}
          >
            <NavLink to={to} className="navLink">
              <BsChevronDown /> <span>{name}</span>
              {isOpen[name] &&
                details?.map((detail) => {
                  return (
                    <NavDetails>
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
