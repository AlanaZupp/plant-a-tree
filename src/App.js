import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from "./components/homepage.component";
import SearchPage from "./components/searchpage.component";
import BuyPage from "./components/buypage.component";


class App extends Component {
  render(){
    return (
      <div className="fullpage">      
        <Router>
          <div className="Nav">
              <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand><NavLink className="navbar-brand" to="/">PlantATree</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic=navbar-nav">
                  <Nav variant="pills" className="mr-auto">
                    <Nav.Item>
                      <Nav.Link><NavLink className="nav-link" to="/" exact activeClassName="current">Home</NavLink></Nav.Link>   
                    </Nav.Item>     

                    <Nav.Item>
                      <Nav.Link><NavLink className="nav-link" to="/search" activeClassName="current">Search</NavLink></Nav.Link>   
                    </Nav.Item>    

                    <Nav.Item>
                      <Nav.Link><NavLink className="nav-link" to="/buy" activeClassName="current">Shopping Cart</NavLink></Nav.Link>   
                    </Nav.Item>            
                  </Nav>
                </Navbar.Collapse>            
              </Navbar>        
          </div>

          <div className="Body">
            <Route path="/" exact component={HomePage}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/buy" component={BuyPage}/>  
          </div>            
        </Router>

        <div className="Footer">
          <div className="footer-copyright text-center py-3">
              &copy; {new Date().getFullYear()} Copyright: Plant Wing Barn
          </div>
        </div>
      </div>
    );
  }
}

  export default App;
