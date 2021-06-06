import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FilterTypeButton from "./FilterTypeButton";
import FilterItemList from "./FilterItemList";

import $filter, { FILTERS } from "../filter";

const FilterHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
`;

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
