import React from "react";
import Header from "../../components/Header";
import ListItem from "./ListItem";
import places from "../../data/places";

export default function ListPage() {
  return (
    <>
      <Header />
      <ul>
        {places.map((place) => (
          <ListItem key={place.name} place={place} />
        ))}
      </ul>
    </>
  );
}
