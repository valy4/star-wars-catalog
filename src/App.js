import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
import CharacterPage from "./Components/CharacterPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/character/:id">
            <CharacterPage />
          </Route>
          <Route path="/">
            <MainContent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
