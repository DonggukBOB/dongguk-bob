import React from "react";
import styled from "styled-components";

const FilterItems = styled.div`
  display: none;
  background-color: #f9f9f9;
`;

const FilterItemButton = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  font-size: 0.875rem;
`;

export default function FilterItem() {
  return (
    <>
      <FilterItems className="location-filter-items">
        <FilterItemButton>동대입구역</FilterItemButton>
        <FilterItemButton>충무로역</FilterItemButton>
      </FilterItems>
      <FilterItems className="price-filter-items">
        <FilterItemButton>7,000원 이하</FilterItemButton>
        <FilterItemButton>8,000원 이하</FilterItemButton>
        <FilterItemButton>9,000원 이하</FilterItemButton>
        <FilterItemButton>9,000원 초과</FilterItemButton>
      </FilterItems>
      <FilterItems className="category-filter-items">
        <FilterItemButton>한식</FilterItemButton>
        <FilterItemButton>양식</FilterItemButton>
        <FilterItemButton>분식</FilterItemButton>
        <FilterItemButton>중식</FilterItemButton>
        <FilterItemButton>일식</FilterItemButton>
        <FilterItemButton>기타</FilterItemButton>
      </FilterItems>
    </>
  );
}
