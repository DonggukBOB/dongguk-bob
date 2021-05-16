import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import DecoImage from "./DecoImage";
import BigButton from "./BigButton";

const Container = styled.div`
  border: 5px solid #ffcc5c;
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default function RecommendPage() {
  return (
    <>
      <Header />
      <Container>
        <DecoImage />
        <DecoImage />
        <DecoImage />
      </Container>
      <BigButton />
      <Container>
        <DecoImage />
        <DecoImage />
        <DecoImage />
      </Container>
    </>
  );
}
