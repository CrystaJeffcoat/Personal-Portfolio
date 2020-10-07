import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path={'/'} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/projects"} component={Projects} />
      </div>
    </Router>
  );
}

export default App;
