import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <header className="header">
      <i
        className="fa fa-chevron-left fa-lg"
        aria-hidden="true"
        onClick={goBack}
      />
      <Link to="/">
        <h3>동국밥</h3>
      </Link>
      <i className="fa fa-bars fa-lg" aria-hidden="true" />
    </header>
  );
}
