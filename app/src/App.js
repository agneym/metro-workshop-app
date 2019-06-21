import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Stations from "./components/Stations";
import Fare from "./components/Fare";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div style={{ marginTop: 52 }}>
          <Route exact path="/" component={Home} />
          <Route path="/stations" component={Stations} />
          <Route path="/fare" component={Fare} />
        </div>
      </Router>
    </div>
  );
}

export default App;
