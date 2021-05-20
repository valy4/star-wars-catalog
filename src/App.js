import React, { useState, useEffect } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContent from "./Components/MainContent"
import Header from "./Components/Header"
import CharacterPage from "./Components/CharacterPage"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <MainContent />
          <Route path="/people/:id">
            <CharacterPage /></Route>
        </Switch>
      </div>
    </Router>
  )

}


export default App;
