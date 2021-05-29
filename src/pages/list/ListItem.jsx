import React from "react";
import styled from "styled-components";
import { openPlaceInfoModal } from "../../components/PlaceInfoModal";

const Container = styled.li`
  padding: 18px;
  border-bottom: 1px solid #dbdbdb;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 144px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 12px 7px 16px 0;
`;

const Title = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const Score = styled.span`
  color: #ff792a;
  margin-left: 8px;
`;

const Address = styled.p`
  font-size: 0.75rem;
  margin-top: 8px;
  color: #9b9b9b;
`;

const Review = styled.p`
  margin-top: 10px;
  font-size: 0.875rem;
`;

export default function ListItem({ place, onOpenModal }) {
  const openModal = () => {
    onOpenModal(place);
    openPlaceInfoModal();
  };

  return (
    <Container onClick={openModal}>
      <Thumbnail src={place.photo} />
      <Info>
        <Title>{place.name}</Title>
        <Score>★ {place.score}/5</Score>
        <Address>{place.address}</Address>
        <Review>{place.comment}</Review>
      </Info>
    </Container>
  );
}
