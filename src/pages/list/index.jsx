import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import places from "../../data/places";

const FilterSection = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: grey;
`;

const List = styled.ul`
  height: 90%;
  width: 100%;
`;

const ListItme = styled.li`
  padding: 18px;
`;

export default function ListPage() {
  const listItems = places.map((post) => (
    <ListItme key={post.name}>
      <img src={post.photo} width="100%" />
    </ListItme>
  ));

  return (
    <>
      <Header />
      <FilterSection></FilterSection>
      <List>{listItems}</List>
    </>
  );
}
