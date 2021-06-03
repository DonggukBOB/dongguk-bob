import React from "react";
import styled, { css } from "styled-components";

const activeStyle = css`
  border: #f29300;
  background: #f29300;
  color: #fff;
`;

const inactiveStyle = css`
  border: 1px solid #cbcbcb;
  background-color: #fff;
  color: #6a6a6a;
`;

const Container = styled.button`
  padding: 8px 10px;
  width: 30%;
  font-size: 0.875rem;
  border-radius: 50px;
  ${({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
`;

export default function FilterTypeButton({ name, text, isActive, onClick }) {
  const onClickButton = () => {
    isActive ? onClick(null) : onClick(name);
  };

  return (
    <Container className="filter" isActive={isActive} onClick={onClickButton}>
      {text}
    </Container>
  );
}
