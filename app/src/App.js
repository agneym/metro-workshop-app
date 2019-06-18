import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
