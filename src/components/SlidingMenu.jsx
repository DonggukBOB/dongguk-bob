import React from "react";
import styled from "styled-components";
import $ from "jquery";

import SlidingMenuItem from "./SlidingMenuItem";

const Container = styled.div`
  display: none;
  z-index: 9999;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Menu = styled.div`
  float: right;
  display: none;
  flex-direction: column;
  width: 55%;
  height: 100%;
  background: white;
`;

const ExitButton = styled.i`
  padding: 20px;
  margin-right: auto;
`;

export const openSlidingMenu = () => {
  $(".sliding-menu-container").show();
  $(".sliding-menu").animate({ width: "show" });
};

export const closeSlidingMenu = () => {
  $(".sliding-menu").animate({ width: "hide" }, { duration: 200 });
  setTimeout(() => $(".sliding-menu-container").hide(), 400);
};

export default function SlidingMenu() {
  const closeMenu = (event) => {
    event.stopPropagation();
    closeSlidingMenu();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Container className="sliding-menu-container" onClick={closeMenu}>
      <Menu className="sliding-menu" onClick={stopPropagation}>
        <ExitButton
          className="fa fa-times"
          aria-hidden="true"
          onClick={closeMenu}
        />
        <SlidingMenuItem contents="추천받기" to="/recommend" />
        <SlidingMenuItem contents="목록보기" to="/list" />
        <SlidingMenuItem contents="지도보기" to="/map" />
      </Menu>
    </Container>
  );
}
