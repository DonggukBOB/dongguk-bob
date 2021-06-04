import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import PlaceInfoModal, {
  openPlaceInfoModal,
} from "../../components/PlaceInfoModal";

import $kakao from "./kakao-map.js";
import PLACES from "../../data/PLACES.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default function MapPage() {
  const [place, setPlace] = useState(null);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    $kakao.initMap("kakao-map");
    PLACES.map((place) => {
      $kakao.drawMarker(place.location);
      $kakao.addClickEventToMarker(place, openOverlay);
    });
    $kakao.drawCurrentLocationMarker();
  }, []);

  const openOverlay = (id) => {
    setPlace(PLACES[id]);
    setIsOverlayActive(true);
    openPlaceInfoModal();
  };

  const closeOverlay = () => {
    setIsOverlayActive(false);
  };

  return (
    <Container>
      <Header />
      <KakaoMap id="kakao-map" />
      {isOverlayActive && (
        <PlaceInfoModal place={place} onClose={closeOverlay} />
      )}
    </Container>
  );
}
