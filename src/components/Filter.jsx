import React from "react";
import styled from "styled-components";

const FilterHeader = styled.section`
  white-space: nowrap;
  overflow-x: auto;
  padding: 0 15px 10px;
  border-bottom: 1px solid #dbdbdb;
`;

const Button = styled.button`
  display: inline-block;
  margin: 10px 8px 0 8px;
  padding: 0 20px;
  font-size: 0.875rem;
  line-height: 32px;
  color: #6a6a6a;
  letter-spacing: -0.1em;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
`;

export default function Filter() {
  return (
    <FilterHeader>
      <Button>위치</Button>
      <Button>가격대</Button>
      <Button>카테고리</Button>
    </FilterHeader>
  );
}
