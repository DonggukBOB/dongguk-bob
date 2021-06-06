import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import $filter from "../filter";

const activeStyle = css`
  background: #f29300;
  color: #fff;
`;

const inactiveStyle = css`
  background: transparent;
  color: black;
`;

const Container = styled.div`
  display: ${({ isActive }) => (isActive ? "" : "none")};
  background: #f9f9f9;
  border-bottom: 1px solid #dbdbdb;
`;

const FilterItem = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  font-size: 0.875rem;
  ${({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
`;

export default function FilterItemList({
  isActive,
  type,
  items,
  multi,
  method,
  onChangeFilter,
}) {
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    $filter.clear(type);
    activeItems.forEach(({ value }) =>
      $filter.push(type, (place) => method(place, value))
    );
    onChangeFilter && onChangeFilter();
  }, [activeItems]);

  const onClickItem = (item) => {
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
    <Container isActive={isActive}>
      {items.map((item) => (
        <FilterItem
          key={item.value}
          isActive={activeItems.includes(item)}
          onClick={() => onClickItem(item)}
        >
          {item.text}
        </FilterItem>
      ))}
    </Container>
  );
}
