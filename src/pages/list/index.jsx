import React, { useState } from "react";

import Header from "../../components/Header";
import Filter from "../../components/Filter";
import ListItem from "./ListItem";
import PlaceInfoModal from "../../components/PlaceInfoModal";

import PLACES from "../../data/places.js";

export default function ListPage() {
  const [place, setPlace] = useState(PLACES[0]);

  const openInfoModal = (selected) => {
    setPlace(selected);
  };

  return (
    <>
      <Header />
      <Filter />
      <ul>
        {PLACES.map((place) => (
          <ListItem key={place.id} place={place} onOpenModal={openInfoModal} />
        ))}
      </ul>
      <PlaceInfoModal place={place} />
    </>
  );
}
