import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FilterTypeButton from "./FilterTypeButton";
import FilterItemList from "./FilterItemList";

import $filter from "../filter";

const FilterHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
`;

const FILTERS = [
  {
    type: "station",
    text: "위치",
    items: [
      { value: "동대입구역", text: "동대입구역" },
      { value: "충무로역", text: "충무로역" },
    ],
    multi: true,
    method: (place, station) => place.station.includes(station),
  },
  {
    type: "price",
    text: "가격",
    items: [
      { value: 6_000, text: "6,000원 이하" },
      { value: 7_000, text: "7,000원 이하" },
      { value: 8_000, text: "8,000원 이하" },
      { value: 9_000, text: "9,000원 이하" },
    ],
    multi: false,
    method: (place, price) => place.price <= price,
  },
  {
    type: "category",
    text: "카테고리",
    items: [
      { value: "한식", text: "한식" },
      { value: "중식", text: "중식" },
      { value: "일식", text: "일식" },
      { value: "양식", text: "양식" },
      { value: "기타", text: "기타" },
    ],
    multi: true,
    method: (place, category) => place.category.includes(category),
  },
];

export default function Filter({ onChangeFilter }) {
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    $filter.clearAll();
  }, []);

  const activateFilter = (filterName) => {
    const filter = FILTERS.find(({ type }) => type === filterName);
    setActiveFilter(filter);
  };

  return (
    <>
      <FilterHeader>
        {FILTERS.map(({ type, text }) => (
          <FilterTypeButton
            key={type}
            name={type}
            text={text}
            isActive={type === activeFilter?.type}
            onClick={activateFilter}
          />
        ))}
      </FilterHeader>
      {FILTERS.map((filter) => (
        <FilterItemList
          key={filter.type}
          isActive={filter.type === activeFilter?.type}
          type={filter.type}
          items={filter.items}
          multi={filter.multi}
          method={filter.method}
          onChangeFilter={onChangeFilter}
        />
      ))}
    </>
  );
}
