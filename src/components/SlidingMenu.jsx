import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  z-index: 9999;
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Menu = styled.ul`
  float: right;
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  background: white;
`;

const MenuItem = styled.li`
  list-style: none;
`;

export default function SlidingMenu() {
  return (
    <Container className="sliding-menu">
      <Menu>
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
