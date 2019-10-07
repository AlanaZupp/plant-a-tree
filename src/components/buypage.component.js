import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./homepage.css";


export default class BuyPage extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          selectValue: ""
        };

        this.state = {
           rating: ""
        };
    
        this.check = this.check.bind(this);
        this.starrate = this.starrate.bind(this);
      }
    
      check(e) {
        this.setState({selectValue: e.target.value });

      }

      starrate(e) {
        this.setState({rating: e.target.value });

      }

    render(){
        return(
            <div className="fullPage">
            <div className="searchBar">
                <p>Store</p>
            </div>
            
            <div id="paymentDiv">
                <h3 align="center">YOUR PURCHASE</h3><br/>
                
                <div id="purchaseItemList">
                    {/* PurchaseItem go Here */}
                    
                    <div id="purchaseTotalDiv">
                        <h6 align = "center">Total: $</h6>
                        <span id="purchaseTotal"></span>   <br></br>                 
                    </div>
                </div>                
            </div>

            <div className="infoDiv">
            <h6 align= "center">PERSONAL INFORMATION</h6><br></br>
                <form>
                    <label>First Name: </label>
                    <span> </span>
                    <input name="fname" type="text"></input>
                    <br/><br/>

                    <label>Last Name: </label>
                    <span> </span>
                    <input name="lname" type="text"></input>
                    <br/><br/>

                    <label>Contact Number: </label>
                    <span> </span>
                    <input name="phonenum" type="text"></input>
                    <br/><br/>

                    <label>Email Address: </label>
                    <span> </span>
                    <input name="email" type="text"></input>
                   
                </form>
            </div>  
            <br></br>     
            <div className= "deliveryDiv">
             <h6 align = "center">CHOOSE DELIVERY METHOD</h6>
                <Tabs defaultActiveKey="profile" id="delivery-method">
                <Tab eventKey="delivery" title="Delivery" id="del">
                
                    * indicates a required field <br/><br/>
                    <form>
                    <label> Delivery Address 1: *</label>
                    <span> </span>
                    <input name="add1" type="text"></input>
                    <br/><br/>

                    <label>Delivery Address 2: </label>
                    <span> </span>
                    <input name="add2" type="text"></input>
                    <br/><br/>

                    <label>City/Suburb: *</label>
                    <span> </span>
                    <input name="city" type="text"></input>
                    <br/><br/>

                    <label>Region: *</label>
                    <span> </span>
                    <input name="region" type="text"></input>

                    <br/><br/>
                    <label>Postcode: *</label>
                    <span> </span>
                    <input name="postcode" type="text"></input>
                   
                    <br/><br/>
                    <button type="button" id="addressButt">Use this address</button>
                   
                </form>
               
                </Tab>
                <Tab eventKey="pickup" title="Pickup" id="pick">
                    <br></br>
                    <select className="custom-select custom-select-sm bg-light" id="pickupbranch">
                        <option value="No option selected" id ="none">--Select Option--</option>
                        <option value="Mount Eden" id ="mteden">Mount Eden</option>
                        <option value="East Tamaki" id="easttam">East Tamaki</option>
                        <option value="Albany" id="albany">Albany</option>
                    </select> 

                    <p id = "print"></p><br></br><br></br><br></br>

                <button type="button" id="pickupButt" onClick={this.getSelectedBranch}>Choose this branch</button>
                </Tab>
                </Tabs>  
               
            </div>
            <br></br>
            <div className = "rating">
                <h6 align = "center">RATE OUR SERVICE</h6>
                <p>Help provide the company with feedback by rating our service!</p
                ><br></br>
                <br></br>
                <Rating
                    size = "large"
                    name="star-rating"
                    onChange={this.starrate}
                    value={this.state.rating}
                    onClick={this.trigger}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />

               <br></br> <p id = "thanks"></p><br></br>
               
            </div>
            <br></br>

            </div>
        )
    }

    getSelectedBranch(){
        var branch = document.getElementById('pickupbranch'); 
        var result = branch.options[branch.selectedIndex].value;
        var mteden = "445 Mount Eden Road, Mount Eden, Auckland, 1024. Contact ph: Stephen Beck (09) 789 4455" ;
        var easttam = "29 Kerwyn Avenue, East Tamaki, Auckland, 2013. Contact ph: Amy Anderson (09) 789 4444";
        var albany ="67 Kell Drive, Albany, Auckland 0632. Contact ph: Chris Wilson (09) 789 1458";
        var none = "No option selected";

     if(result == "Mount Eden"){
        document.getElementById('print').innerHTML = mteden; 
     }

    if(result == "East Tamaki"){
         document.getElementById('print').innerHTML = easttam;  
    }

    if(result == "Albany"){
        document.getElementById('print').innerHTML = albany;  
        
    }
   
    }

    trigger(){
            document.getElementById('thanks').innerHTML = "Thanks for your feedback!";
    }
}
