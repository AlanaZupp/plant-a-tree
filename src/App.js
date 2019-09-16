import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/homepage.component";
import SearchPage from "./components/searchpage.component";
import BuyPage from "./components/buypage.component";

class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">PlantATree</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/search" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/buy" className="nav-link">Buy</Link>
                </li>
              </ul>
            </div>
          </nav>
        <Route path="/" exact component={HomePage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/buy" component={BuyPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
