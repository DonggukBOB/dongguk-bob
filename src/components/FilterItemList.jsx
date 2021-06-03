import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9;
`;

const FilterButton = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  font-size: 0.875rem;
`;

export default function FilterItemList({ items }) {
  return (
    <Container>
      {items.map((item) => (
        <FilterButton key={item}>{item}</FilterButton>
      ))}
    </Container>
  );
}
