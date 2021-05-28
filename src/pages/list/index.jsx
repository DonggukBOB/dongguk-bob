import React from "react";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import styled from "styled-components";
import places from "../../data/places";

const ListItme = styled.li`
  padding: 18px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
`;

const Image = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 144px;
  object-fit: cover;
  color: rgba(255, 255, 255, 0);
  text-indent: -9999px;
  border: none;
  vertical-align: top;
`;

const Info = styled.div`
  padding: 12px 7px 16px 0px;
`;

const Title = styled.span`
  font-size: 1.2em;
`;

const Score = styled.span`
  color: #ff792a;
  font-size: 1.3em;
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
  line-height: 21px;
`;

function ListItems(place) {
  return (
    <ListItme key={place.name}>
      <Image src={place.photo} />
      <Info>
        <Title>{place.name}</Title>
        <Score>{place.score}/5</Score>
        <Address>{place.address}</Address>
        <Review>{place.comment}</Review>
      </Info>
    </ListItme>
  );
}

export default function ListPage() {
  return (
    <>
      <Header />
      <Filter />
      <ul>{places.map((place) => ListItems(place))}</ul>
    </>
  );
}
