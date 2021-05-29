import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  height: 70%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: white;
  border-radius: 20px;
`;

export default function PlaceInfoModal() {
  return (
    <Container>
      <ModalContainer>Modal</ModalContainer>
    </Container>
  );
}
