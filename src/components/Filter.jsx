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
    multi: true,
  },
  {
    name: "price",
    text: "가격",
    items: ["7,000원 이하", "8,000원 이하", "9,000원 이하", "9,000원 초과"],
    multi: false,
  },
  {
    name: "category",
    text: "카테고리",
    items: ["한식", "양식", "일식", "중식", "분식", "기타"],
    multi: true,
  },
];

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState(null);

  const activateFilter = (filterName) => {
    const filter = FILTERS.find(({ name }) => name === filterName);
    setActiveFilter(filter);
  };

  return (
    <>
      <FilterHeader>
        {FILTERS.map(({ name, text }) => (
          <FilterTypeButton
            key={name}
            name={name}
            text={text}
            isActive={name === activeFilter?.name}
            onClick={activateFilter}
          />
        ))}
      </FilterHeader>
      {activeFilter && (
        <FilterItemList items={activeFilter.items} multi={activeFilter.multi} />
      )}
    </>
  );
}
