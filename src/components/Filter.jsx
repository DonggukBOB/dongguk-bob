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
  color: #6a6a6a;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
  &:active {
    border-color: #0078ff;
    background-color: #0078ff;
    color: #fff;
  }
`;

const FilterBody = styled.div`
  display: none;
  padding: 10px;
  background-color: #f9f9f9;
`;

export default function Filter() {
  const LocationInfoBody = () => {
    const displayValue = $(".location-info-Filter-container").css("display");
    if (displayValue === "none") {
      $(".filter-body").hide();
      $(".location-info-Filter-container").show();
    } else {
      $(".location-info-Filter-container").hide();
    }
  };

  const PriceInfoBody = () => {
    const displayValue = $(".price-info-Filter-container").css("display");
    if (displayValue === "none") {
      $(".filter-body").hide();
      $(".price-info-Filter-container").show();
    } else {
      $(".price-info-Filter-container").hide();
    }
  };

  const CategoryInfoBody = () => {
    const displayValue = $(".category-info-Filter-container").css("display");
    if (displayValue === "none") {
      $(".filter-body").hide();
      $(".category-info-Filter-container").show();
    } else {
      $(".category-info-Filter-container").hide();
    }
  };

  return (
    <>
      <FilterHeader>
        <FilterButton onClick={LocationInfoBody}>위치</FilterButton>
        <FilterButton onClick={PriceInfoBody}>가격대</FilterButton>
        <FilterButton onClick={CategoryInfoBody}>카테고리</FilterButton>
      </FilterHeader>
      <FilterBody className="location-info-Filter-container filter-body">
        <div>동대입구역</div>
        <div>충무로역</div>
      </FilterBody>
      <FilterBody className="price-info-Filter-container filter-body">
        <div>6,000원 ~ 7,000원</div>
        <div>7,000 ~ 8,000원</div>
        <div>8,000 ~ 9,000원</div>
        <div>9,000원 이상</div>
      </FilterBody>
      <FilterBody className="category-info-Filter-container filter-body">
        <div>한식</div>
        <div>양식</div>
        <div>분식</div>
        <div>중식</div>
      </FilterBody>
    </>
  );
}
