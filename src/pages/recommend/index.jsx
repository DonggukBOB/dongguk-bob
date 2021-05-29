import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import PlaceInfoModal, {
  openPlaceInfoModal,
} from "../../components/PlaceInfoModal";

import places from "../../data/places";

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
  const [place, setPlace] = useState(places[0]);
  const [previousPlaces, setPreviousPlaces] = useState([]);

  const recommendPlace = () => {
    return places[Math.floor(Math.random() * places.length)];
  };

  const openModal = () => {
    setPlace(recommendPlace());
    openPlaceInfoModal();
  };

  const retryRecommend = () => {
    previousPlaces.push(place);
    setPreviousPlaces(previousPlaces);
    setPlace(recommendPlace());
  };

  const backPlace = () => {
    const previousPlace = previousPlaces.pop();
    if (!previousPlace) {
      return;
    }
    setPlace(previousPlace);
  };

  return (
    <Container>
      <Header />
      <RecommendButton onClick={openModal}>Go!</RecommendButton>
      <PlaceInfoModal
        place={place}
        retry
        onRetry={retryRecommend}
        onBackPlace={backPlace}
      />
    </Container>
  );
}
