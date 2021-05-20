import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 0.1em solid #ffcc5c;
  border-radius: 1em;
  background-color: #fbc402;
  margin: 0 auto;
  width: 5em;
  height: 5em;
  margin-left: -2.5em;
  margin-top: -2.5em;
  font-size: 5em;
`;

export default function RecommendButton() {
  return (
    <Container>
      <Button onClick={() => alert("추천 완료!")}>Go!</Button>
    </Container>
  );
}
