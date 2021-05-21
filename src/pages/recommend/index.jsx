import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

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
  return (
    <Container>
      <Header />
      <Button onClick={() => alert("추천 완료!")}>Go!</Button>
    </Container>
  );
}
