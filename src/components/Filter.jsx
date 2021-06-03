import React, { useState } from "react";
import styled from "styled-components";
import FilterTypeButton from "./FilterTypeButton";
import FilterItemList from "./FilterItemList";

const FilterHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
`;

const FILTERS = [
  {
    name: "location",
    text: "위치",
    items: ["동대입구역", "충무로역"],
  },
  {
    name: "price",
    text: "가격",
    items: ["7,000원 이하", "8,000원 이하", "9,000원 이하", "9,000원 초과"],
  },
  {
    name: "category",
    text: "카테고리",
    items: ["한식", "양식", "일식", "중식", "분식", "기타"],
  },
];

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState(null);

  const selectFilter = (filter) => {
    setActiveFilter(filter);
  };

  const findFilterItems = () => {
    return FILTERS.find(({ name }) => name === activeFilter).items;
  };

  return (
    <>
      <FilterHeader>
        {FILTERS.map(({ name, text }) => (
          <FilterTypeButton
            key={name}
            name={name}
            text={text}
            isActive={name === activeFilter}
            onClick={selectFilter}
          />
        ))}
      </FilterHeader>
      {activeFilter && <FilterItemList items={findFilterItems()} />}
    </>
  );
}
