import React from "react";
import { Route } from "react-router-dom";

import MainPage from "./pages/main";
import RecommendPage from "./pages/recommend";
import ListPage from "./pages/list";
import MapPage from "./pages/map";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={MainPage} />
      <Route path="/recommend" component={RecommendPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/map" component={MapPage} />
    </div>
  );
}

export default App;
