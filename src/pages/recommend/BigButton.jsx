import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  margin: auto;
`;

const Button = styled.button`
  border: 5px solid #ffcc5c;
  background-color: #fbc402;
  margin: 0 auto;
  width: 80%;
  height: 400px;
  font-size: 5em;
`;

export default function BigButton() {
  return (
    <Container>
      <Link to="/result">
        <Button onClick={() => alert("추천!")}>Go!</Button>
      </Link>
    </Container>
  );
}
