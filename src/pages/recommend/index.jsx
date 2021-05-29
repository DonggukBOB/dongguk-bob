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

const Button = styled.button`
  margin: auto;
  width: 2.5em;
  height: 2.5em;
  border: 0;
  border-radius: 50%;
  background-color: #fbc402;
  font-size: 6em;
  font-weight: bold;
  box-shadow: 5px 5px 5px 5px gray;
`;

export default function RecommendPage() {
  const [place, setPlace] = useState(places[0]);

  const openPlaceInfoModal = () => {
    setPlace(places[0]);
    $(".place-info-modal").show();
  };

  return (
    <Container>
      <Header />
      <Button onClick={openPlaceInfoModal}>Go!</Button>
      <PlaceInfoModal place={place} />
    </Container>
  );
}
