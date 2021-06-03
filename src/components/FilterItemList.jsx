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

const FilterItem = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  font-size: 0.875rem;
  ${({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
`;

export default function FilterItemList({ items, multi }) {
  const [activeItems, setActiveItems] = useState([]);

  const onClickItem = ({ target }) => {
    const item = target.innerText;
    activeItems.includes(item) ? inactivateItem(item) : activateItem(item);
  };

  const activateItem = (item) => {
    multi ? setActiveItems([item, ...activeItems]) : setActiveItems([item]);
  };

  const inactivateItem = (item) => {
    const index = activeItems.indexOf(item);
    activeItems.splice(index, 1);
    setActiveItems([...activeItems]);
  };

  return (
    <Container>
      {items.map((item) => (
        <FilterItem
          key={item}
          isActive={activeItems.includes(item)}
          onClick={onClickItem}
        >
          {item}
        </FilterItem>
      ))}
    </Container>
  );
}
