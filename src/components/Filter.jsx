import React from "react";
import styled from "styled-components";
import $ from "jquery";

const FilterHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
`;

const FilterButton = styled.button`
  padding: 8px 10px;
  width: 30%;
  font-size: 0.875rem;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
  color: #6a6a6a;

  &:active {
    border-color: #f29300;
    background-color: #f29300;
    color: #fff;
  }
`;

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

export default function Filter() {
  const LocationInfoItems = () => {
    $(".location-filter-items").css("background-color", "#f29300");
    $(".location-filter-items").toggle();
    $(".price-filter-items").hide();
    $(".category-filter-items").hide();
  };

  const PriceInfoItems = () => {
    $(".price-filter-items").toggle();
    $(".location-filter-items").hide();
    $(".category-filter-items").hide();
  };

  const CategoryInfoItems = () => {
    $(".category-filter-items").toggle();
    $(".price-filter-items").hide();
    $(".location-filter-items").hide();
  };

  return (
    <>
      <FilterHeader>
        <FilterButton onClick={LocationInfoItems}>위치</FilterButton>
        <FilterButton onClick={PriceInfoItems}>가격대</FilterButton>
        <FilterButton onClick={CategoryInfoItems}>카테고리</FilterButton>
      </FilterHeader>
      <FilterItems className="filter-items location-filter-items">
        <FilterItemButton>동대입구역</FilterItemButton>
        <FilterItemButton>충무로역</FilterItemButton>
      </FilterItems>
      <FilterItems className="filter-items price-filter-items">
        <FilterItemButton>7,000원 이하</FilterItemButton>
        <FilterItemButton>8,000원 이하</FilterItemButton>
        <FilterItemButton>9,000원 이하</FilterItemButton>
        <FilterItemButton>9,000원 초과</FilterItemButton>
      </FilterItems>
      <FilterItems className="filter-items category-filter-items">
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
