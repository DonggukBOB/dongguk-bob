import React, { useState } from "react";
import styled, { css } from "styled-components";

const activeStyle = css`
  background: #f29300;
  color: #fff;
`;

const inactiveStyle = css`
  background: transparent;
  color: black;
`;

const Container = styled.div`
  background: #f9f9f9;
`;

const FilterButton = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  font-size: 0.875rem;
  ${({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
`;

export default function FilterItemList({ items }) {
  const [activeButtons, setActiveButtons] = useState([]);

  const activateButton = ({ target }) => {
    const item = target.innerText;
    if (!activeButtons.includes(item)) {
      setActiveButtons([item, ...activeButtons]);
      return;
    }
    const index = activeButtons.indexOf(item);
    activeButtons.splice(index, 1);
    setActiveButtons([...activeButtons]);
  };

  return (
    <Container>
      {items.map((item) => (
        <FilterButton
          key={item}
          isActive={activeButtons.includes(item)}
          onClick={activateButton}
        >
          {item}
        </FilterButton>
      ))}
    </Container>
  );
}
