import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import HomePage from "./components/homepage.component";
import SearchPage from "./components/searchpage.component";
import BuyPage from "./components/buypage.component";
import ShoppingCart from './components/shoppingcart.component';

class App extends Component {
  render(){
    return (
      <div className="fullpage">   
        <Router>
          <div className="Nav">
              <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand><NavLink className="navbar-brand" to="/">PlantATree</NavLink></Navbar.Brand>

                {
                  //For Extra Small Screens
                }
                <Nav.Item className="d-sm-none"> 
                  <Nav.Link>
                    <NavLink onClick={showCart}>
                      Shopping Cart
                      <span> </span>
                      <span class="badge badge-secondary">0</span>
                    </NavLink>
                  </Nav.Link>                        
                </Nav.Item>

                {
                  //For Small
                }
                <Nav.Item className="d-none d-sm-block d-md-none"> 
                  <Nav.Link>
                    <NavLink onClick={showCart}>
                      Shopping Cart
                      <span> </span>
                      <span class="badge badge-secondary">0</span>
                    </NavLink>
                  </Nav.Link>                        
                </Nav.Item>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic=navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Item>
                      <Nav.Link><NavLink className="nav-link" to="/" exact activeClassName="current">Home</NavLink></Nav.Link>   
                    </Nav.Item>     

                    <Nav.Item>
                      <Nav.Link><NavLink className="nav-link" to="/search" activeClassName="current">Store</NavLink></Nav.Link>   
                    </Nav.Item>         
                  </Nav>
                </Navbar.Collapse>    

                {
                  //For Medium Screens and Up                  
                }
                <Nav.Item className="d-none d-md-block">
                  <Nav.Link>
                    <NavLink onClick={showCart}>
                      Shopping Cart
                      <span> </span>
                      <span class="badge badge-secondary">0</span>
                    </NavLink>
                  </Nav.Link>                            
                </Nav.Item>      
              </Navbar>        
          </div>

          <div id="ShoppingCart"> 
            <div className="cartContentPanel">             
              <div className="cartHeading">
                  <h4>Shopping Cart</h4>
              </div>

              <div className="ShoppingCartObj">
                <div className="cartPurchasedItems">

                  <div className="cart-item d-flex justify-content-between">
                    <img src="#"/>

                    <p>Item Name</p>
                    <div>
                      <span>$</span>
                      <span>10.00</span>
                    </div>
                  </div>

                  
                  <div className="cart-item d-flex justify-content-between">
                    <img src="#"/>

                    <p>Item2</p>
                    <div>
                      <span>$</span>
                      <span>50.00</span>
                    </div>
                  </div>

                </div>
                <div className="totalPrice">
                    <h6>Total: $0.00</h6>
                </div>

              </div>

              <div className="cartButtonDiv">
                  <Button bg="dark" variant="dark" onClick={showCart}><NavLink>Clear Cart</NavLink></Button>
                  <span> </span>
                  <Button bg="dark" variant="dark"  onClick={showCart}><NavLink to="/buy">Purchase</NavLink></Button>
              </div>
            </div>
          </div>

          <div className="Body">
            <Route path="/" exact component={HomePage}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/buy" component={BuyPage}/>   
          </div>            
        </Router>

        <div className="Footer">
          <div className="footer-copyright text-right py-3">
              &copy; {new Date().getFullYear()} Copyright: Plant Wing Barn
          </div>
        </div>
      </div>
    );  
  }
}
  export default App;

  function showCart() {
    var node = document.getElementById('ShoppingCart');
    var visibility = node.style.visibility;
    node.style.visibility = visibility == "visible" ? 'hidden' : "visible";
  } 


