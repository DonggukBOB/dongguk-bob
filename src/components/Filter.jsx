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
  padding: 8px 20px;
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

  &:active {
    border-color: #f29300;
    background-color: #f29300;
    color: #fff;
  }
`;

export default function Filter() {
  const LocationInfoItems = () => {
    const displayValue = $(".location-filter-items").css("display");
    if (displayValue === "none") {
      $(".filter-items").hide();
      $(".location-filter-items").show();
    } else {
      $(".location-filter-items").hide();
    }
  };

  const PriceInfoItems = () => {
    const displayValue = $(".price-filter-items").css("display");
    if (displayValue === "none") {
      $(".filter-items").hide();
      $(".price-filter-items").show();
    } else {
      $(".price-filter-items").hide();
    }
  };

  const CategoryInfoItems = () => {
    const displayValue = $(".category-filter-items").css("display");
    if (displayValue === "none") {
      $(".filter-items").hide();
      $(".category-filter-items").show();
    } else {
      $(".category-filter-items").hide();
    }
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
        <FilterItemButton>6,000 ~ 7,000원</FilterItemButton>
        <FilterItemButton>7,000 ~ 8,000원</FilterItemButton>
        <FilterItemButton>8,000 ~ 9,000원</FilterItemButton>
        <FilterItemButton>9,000원 이상</FilterItemButton>
      </FilterItems>
      <FilterItems className="filter-items category-filter-items">
        <FilterItemButton>한식</FilterItemButton>
        <FilterItemButton>양식</FilterItemButton>
        <FilterItemButton>분식</FilterItemButton>
        <FilterItemButton>중식</FilterItemButton>
      </FilterItems>
    </>
  );
}
