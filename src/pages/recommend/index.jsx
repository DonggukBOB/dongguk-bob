import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import PlaceInfoModal, {
  openPlaceInfoModal,
} from "../../components/PlaceInfoModal";
import PLACES from "../../data/PLACES";

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
  const [place, setPlace] = useState(PLACES[0]);
  const [previousPlaces, setPreviousPlaces] = useState([]);

  const recommendPlace = () => {
    return PLACES[Math.floor(Math.random() * PLACES.length)];
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
      <Filter />
      <RecommendButton onClick={openModal}>Go!</RecommendButton>
      <PlaceInfoModal
        place={place}
        recommend
        onRetry={retryRecommend}
        onBackPlace={backPlace}
      />
    </Container>
  );
}
