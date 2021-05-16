/*
import React from "react";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
  
*/

import React from "react";
import 떡볶이 from "./images/떡볶이.png";

export default function DecoImage() {
  return (
    <div>
      <img src={떡볶이} width="150" height="150" alt="떡볶이" />
    </div>
  );
}
