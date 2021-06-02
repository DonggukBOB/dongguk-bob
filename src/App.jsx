import React from "react";
import { Route } from "react-router-dom";

import MainPage from "./pages/main";
import RecommendPage from "./pages/recommend";
import ListPage from "./pages/list";
import MapPage from "./pages/map";
import styled from "styled-components";
import SlidingMenu from "./components/SlidingMenu";

const Container = styled.div`
  max-width: 500px;
  height: calc(var(--vh, 1vh) * 100);
  margin: auto;
  box-shadow: 0 0 10px 2px gray;
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <Container className="App">
      <SlidingMenu />
      <Route path="/" exact component={MainPage} />
      <Route path="/recommend" component={RecommendPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/map" component={MapPage} />
    </Container>
  );
}

export default App;
