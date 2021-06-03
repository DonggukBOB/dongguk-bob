import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";
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
  border-radius: 50px;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  color: #6a6a6a;
`;

export default function Filter() {
  const openLocationItems = () => {
    $(".location-filter").css({
      border: "#f29300",
      background: "#f29300",
      color: "#fff",
    });
    $(".price-filter").css({
      border: "1px solid #cbcbcb",
      background: "#fff",
      color: "#6a6a6a",
    });
    $(".category-filter").css({
      border: "1px solid #cbcbcb",
      background: "#fff",
      color: "#6a6a6a",
    });
    $(".location-filter-items").toggle();
    $(".price-filter-items").hide();
    $(".category-filter-items").hide();
  };

  const openPriceItems = () => {
    $(".price-filter").css({
      border: "#f29300",
      background: "#f29300",
      color: "#fff",
    });
    $(".location-filter").css({
      border: "1px solid #cbcbcb",
      background: "#fff",
      color: "#6a6a6a",
    });
    $(".category-filter").css({
      border: "1px solid #cbcbcb",
      background: "#fff",
      color: "#6a6a6a",
    });
    $(".price-filter-items").toggle();
    $(".location-filter-items").hide();
    $(".category-filter-items").hide();
  };

  const openCategoryItems = () => {
    $(".category-filter").css({
      border: "#f29300",
      background: "#f29300",
      color: "#fff",
    });
    $(".price-filter").css({
      border: "1px solid #cbcbcb",
      background: "#fff",
      color: "#6a6a6a",
    });
    $(".location-filter").css({
      border: "1px solid #cbcbcb",
      background: "#fff",
      color: "#6a6a6a",
    });
    $(".category-filter-items").toggle();
    $(".price-filter-items").hide();
    $(".location-filter-items").hide();
  };

  return (
    <>
      <FilterHeader>
        <FilterButton className="location-filter" onClick={openLocationItems}>
          위치
        </FilterButton>
        <FilterButton className="price-filter" onClick={openPriceItems}>
          가격대
        </FilterButton>
        <FilterButton className="category-filter" onClick={openCategoryItems}>
          카테고리
        </FilterButton>
      </FilterHeader>
      <FilterItem />
    </>
  );
}
