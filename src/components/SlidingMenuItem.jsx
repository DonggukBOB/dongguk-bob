import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import $ from "jquery";

const Item = styled.div`
  padding: 20px;
  border-bottom: solid rgba(0, 0, 0, 0.25) 1px;
  white-space: nowrap;
  overflow: hidden;
`;

export default function SlidingMenuItem({ contents, to }) {
  const history = useHistory();

  const link = () => {
    history.push(to);
    $(".sliding-menu").animate({ width: "toggle" });
    setTimeout(() => $(".sliding-menu-container").hide(), 400);
  };

  return <Item onClick={link}>{contents}</Item>;
}
