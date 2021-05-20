import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import RecommendButton from "./RecommendButton";

const Container = styled.div`
  aling-items: center;
  margin: auto;
`;

export default function RecommendPage() {
  return (
    <>
      <Header />
      <Container>
        <RecommendButton />
      </Container>
    </>
  );
}
