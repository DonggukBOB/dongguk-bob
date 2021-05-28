import React from "react";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import places from "../../data/places";

export default function ListPage() {
  return (
    <>
      <Header />
      <ul>{places.map((place) => ListItem(place))}</ul>
    </>
  );
}
