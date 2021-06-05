import React, { useState } from "react";

import Header from "../../components/Header";
import Filter from "../../components/Filter";
import ListItem from "./ListItem";
import PlaceInfoModal from "../../components/PlaceInfoModal";

import PLACES from "../../data/places.js";
import $filter from "../../filter";

export default function ListPage() {
  const [places, setPlaces] = useState(PLACES);
  const [place, setPlace] = useState(PLACES[0]);

  const openInfoModal = (selected) => {
    setPlace(selected);
  };

  const applyFilter = () => {
    const filteredPlaces = $filter.apply(PLACES);
    setPlaces(filteredPlaces);
  };

  return (
    <>
      <Header />
      <Filter onChangeFilter={applyFilter} />
      <ul>
        {places.map((place) => (
          <ListItem key={place.id} place={place} onOpenModal={openInfoModal} />
        ))}
      </ul>
      <PlaceInfoModal place={place} />
    </>
  );
}
