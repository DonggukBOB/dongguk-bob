import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import places from "../../data/places";
import PlaceInfoModal from "../../components/PlaceInfoModal";
import $ from "jquery";

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

  const recommendPlace = () => {
    return places[Math.floor(Math.random() * places.length)];
  };

  const openPlaceInfoModal = () => {
    setPlace(recommendPlace());
    $(".place-info-modal").show();
  };

  const retryRecommend = () => {
    setPlace(recommendPlace());
  };

  return (
    <Container>
      <Header />
      <RecommendButton onClick={openPlaceInfoModal}>Go!</RecommendButton>
      <PlaceInfoModal place={place} retry onRetry={retryRecommend} />
    </Container>
  );
}
