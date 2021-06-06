import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Filter from "../../components/Filter";
import PlaceInfoModal, {
  openPlaceInfoModal,
} from "../../components/PlaceInfoModal";

import PLACES from "../../data/places.js";
import $filter from "../../filter";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const RecommendButton = styled.button`
  margin: auto;
  width: 2.5em;
  height: 2.5em;
  border: none;
  border-radius: 50%;
  background-color: #fbc402;
  font-size: 6rem;
  font-weight: bold;
  box-shadow: 5px 5px 5px 5px gray;
`;

export default function RecommendPage() {
  const [place, setPlace] = useState(null);
  const [previousPlaces, setPreviousPlaces] = useState([]);

  const recommendPlace = (places) => {
    return places[Math.floor(Math.random() * places.length)];
  };

  const openModal = () => {
    setPreviousPlaces([]);
    const filteredPlaces = $filter.apply(PLACES);
    const recommended = recommendPlace(filteredPlaces);
    if (!recommended) {
      alert("추천할 가게가 없어요! T.T");
      return;
    }
    setPlace(recommended);
    openPlaceInfoModal();
  };

  const retryRecommend = () => {
    previousPlaces.push(place);
    const filteredPlaces = $filter.apply(PLACES);
    const places = filteredPlaces.filter(
      (place) => !previousPlaces.includes(place)
    );
    const recommended = recommendPlace(places);
    if (!recommended) {
      alert("더 이상 추천할 가게가 없어요! T.T");
      return;
    }

    setPreviousPlaces(previousPlaces);
    setPlace(recommended);
  };

  const backPlace = () => {
    const previousPlace = previousPlaces.pop();
    if (!previousPlace) {
      return;
    }

    setPreviousPlaces(previousPlaces);
    setPlace(previousPlace);
  };

  return (
    <Container>
      <Header />
      <Filter />
      <RecommendButton onClick={openModal}>Go!</RecommendButton>
      {place && (
        <PlaceInfoModal
          place={place}
          recommend
          onRetry={retryRecommend}
          onBackPlace={backPlace}
        />
      )}
    </Container>
  );
}
