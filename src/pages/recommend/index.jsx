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
  width: 2.3em;
  height: 2.3em;
  border: 10px solid #ea5413;
  border-radius: 16px;
  background-color: #fbc402;
  font-size: 7.2em;
  font-weight: bold;
`;

export default function RecommendPage() {
  return (
    <Container>
      <Header />
      <Button onClick={() => alert("추천 완료!")}>Go!</Button>
    </Container>
  );
}
