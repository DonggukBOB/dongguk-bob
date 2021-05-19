import React from "react";
import styled from "styled-components";
import $ from "jquery";

import { Link } from "react-router-dom";

const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  background: white;
`;

const ExitButton = styled.i`
  padding: 20px;
`;

const MenuItem = styled.div`
  padding: 20px;
  border-bottom: solid rgba(0, 0, 0, 0.25) 1px;
`;

export default function SlidingMenu() {
  const closeMenu = () => {
    $(".sliding-menu").hide();
  };

  return (
    <Container className="sliding-menu">
      <Menu>
        <ExitButton
          className="fa fa-times"
          aria-hidden="true"
          onClick={closeMenu}
        />
        <MenuItem>
          <Link to="/recommend">추천받기</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/list">목록보기</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/map">지도보기</Link>
        </MenuItem>
      </Menu>
    </Container>
  );
}
