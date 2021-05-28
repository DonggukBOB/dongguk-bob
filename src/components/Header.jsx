import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import $ from "jquery";

const Container = styled.header`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background: #f29300;
`;

export default function Header() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const openMenu = () => {
    $(".sliding-menu-container").show();
    $(".sliding-menu").animate({ width: "toggle" });
  };

  return (
    <Container className="header">
      <i
        className="fa fa-chevron-left fa-lg"
        aria-hidden="true"
        onClick={goBack}
      />
      <Link to="/">
        <h3>동국밥</h3>
      </Link>
      <i className="fa fa-bars fa-lg" aria-hidden="true" onClick={openMenu} />
    </Container>
  );
}
