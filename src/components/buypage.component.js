import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./homepage.css";

import {addDelivery} from './shoppingcart';

export default class BuyPage extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "",
          rating: "",
          add1: "",
          add2: "",
          city: "",
          region: "",
          postcode: "",
          fname: "",
          lname: "",
          phonenum: ""
        };
      
        this.check = this.check.bind(this);
        this.starrate = this.starrate.bind(this);
        this.changeDelivery = this.changeDelivery.bind(this);
        this.submitDelivery = this.submitDelivery.bind(this);
        this.submitPersonal = this.submitPersonal.bind(this);
        this.changePersonal = this.changePersonal.bind(this);

    }

    check(e) {
        this.setState({selectValue: e.target.value });

    }

    starrate(e) {
        this.setState({rating: e.target.value });

    }

    submitDelivery(event){
        event.preventDefault();

        if (!Number(this.state.postcode)) {
            alert("Your postcode must must consist of numbers only");
        }
        else if(this.state.add1 && this.state.city && this.state.region && this.state.postcode != ""){

        document.getElementById('addressValidation').innerHTML = "<b> "+ "Is this the correct address?" + "</b>" + "</br>" + this.state.add1 +"</br>"+ this.state.add2 +
        "</br>"+ this.state.city+ ", " + this.state.region + ", " + this.state.postcode;
        }
        else
        {
            alert("You must enter all fields with the asterix (*)");
        }
      }
      
      changeDelivery(event) {
        let input = event.target.name;
        let inputVal = event.target.value;

        this.setState({[input]: inputVal});

      }

       submitPersonal(event){
        event.preventDefault();

        if (!Number(this.state.phonenum)) {
            alert("Your phone number must consist of numbers only");
        }
        else if(this.state.fname && this.state.lname && this.state.phonenum != ""){

        document.getElementById('personalConfirm').innerHTML = "<b> "+ "Is this the correct information?" + "</b>" + "</br>Name: " + this.state.fname +" "+ this.state.lname +
        "</br>Phone: "+ this.state.phonenum;
        }
        else
        {
            alert("You must enter all fields with the asterix (*)");
        }
      }

    
      changePersonal(event){
          let input = event.target.name;
          let inputVal = event.target.value;

          this.setState({[input]: inputVal});
      }

       getSelectedBranch(){
        var branch = document.getElementById('pickupbranch'); 
        var result = branch.options[branch.selectedIndex].value;
        var eden = "https://goo.gl/maps/En2gUntUQMSgftUR7";
        var edenPh= "Contact ph: Stephen Beck (09) 789 4455" ;
        var easttam ="https://goo.gl/maps/mDPRhHWuJGqkUadh6";
        var eastPh = "Contact ph: Amy Anderson (09) 789 4444";
        var albany = "https://goo.gl/maps/79fb5UXJUpKVJwAGA";
        var albanyPh = " Contact ph: Chris Wilson (09) 789 1458";


        if(result == "Mount Eden"){
            document.getElementById('print').innerHTML = "The address is: </br>" + "<a href = '" + eden + "'target ='popup'>445 Mount Eden Road, Mount Eden, Auckland, 1024. </a>" + "<br/>" + edenPh ;
        }

        if(result == "East Tamaki"){
            document.getElementById('print').innerHTML = "The address is: </br>" + "<a href = '" + easttam + "'target ='popup'>29 Kerwyn Avenue, East Tamaki, Auckland, 2013. </a>" + "<br/>" + eastPh ;
        }

        if(result == "Albany"){
            document.getElementById('print').innerHTML = "The address is: </br>" + "<a href = '" + albany + "'target ='popup'>67 Kell Drive, Albany, Auckland 0632. </a>" + "<br/>" + albanyPh ;

        }

        if(result == "No option selected"){
            document.getElementById('print').innerHTML = "Select your nearest branch!"; 
            
        }
    }

    getSelectedShipping(){
        var ship = document.getElementById('shippingcosts'); 
        var result = ship.options[ship.selectedIndex].value;
        var urban = "$10 shipping cost for 1-10 products purchased.";
        var rural=  "$17 shipping cost for 1-10 products purchased.";
        var notAuck = "$22 shipping cost for 1-10 products purchased.";

        if(result === "Urban"){
            document.getElementById('printShipping').innerHTML = urban;
            addDelivery(10.00); 
        }

        if(result === "Rural"){
            document.getElementById('printShipping').innerHTML = rural;   
            addDelivery(17.00);
        }

        if(result === "OutsideAuckland"){
            document.getElementById('printShipping').innerHTML = notAuck; 
            addDelivery(22.00);
            
        }

        if(result == "No option selected"){
            document.getElementById('printShipping').innerHTML = "Select your address type!"; 
            
        }
    }

    trigger(){
            document.getElementById('thanks').innerHTML = "Thanks for your feedback!";
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
                <form id = "personal">
                    <label>First Name: *</label>
                    <span> </span>
                    <input name="fname" type="text" onChange={this.changePersonal}></input>
                    <br/><br/>

                    <label>Last Name: *</label>
                    <span> </span>
                    <input name="lname" type="text" onChange={this.changePersonal}></input>
                    <br/><br/>

                    <label>Contact Number: *</label>
                    <span> </span>
                    <input name="phonenum" type="text" onChange={this.changePersonal}></input>
                    <br/><br/>

                    <div id = "personalConfirm">
                    </div>
                    <button type="button" id="infoButt" onClick={this.submitPersonal}>Confirm details</button>

                </form>
            </div>  
            <br></br>     
            <div className= "deliveryDiv">
             <h6 align = "center">CHOOSE DELIVERY METHOD</h6>
                <Tabs defaultActiveKey="delivery" id="delivery-method">
                <Tab eventKey="delivery" title="Delivery" id="del">
                
                <br></br>
                    <form id = "del-method" >
                    <label> Delivery Address 1: *</label>
                    <span> </span>
                    <input name="add1" type="text" onChange={this.changeDelivery}></input>
                    <br/><br/>

                    <label>Delivery Address 2: </label>
                    <span> </span>
                    <input name="add2" type="text" onChange={this.changeDelivery}></input>
                    <br/><br/>

                    <label>City/Suburb: *</label>
                    <span> </span>
                    <input name="city" type="text" onChange={this.changeDelivery}></input>
                    <br/><br/>

                    <label>Region: *</label>
                    <span> </span>
                    <input name="region" type="text" onChange={this.changeDelivery}></input>

                    <br/><br/>
                    <label>Postcode: *</label>
                    <span> </span>
                    <input name="postcode" type="text" onChange={this.changeDelivery}></input>
                   
                   <div id = "addressValidation">
                    </div>
                  <br></br>
                    <button type="button" id="addressButt" onClick={this.submitDelivery}>Use this address</button>
                    <br></br><br></br>
                   
                   
                </form>
                
                <h6>SHIPPING COSTS</h6>
                <span> </span>
                       <i> BUY 10 OR MORE ITEMS FOR FREE SHIPPING NATIONWIDE</i>
                <br></br> <br></br>
                <h6>SELECT YOUR ADDRESS TYPE</h6>
                <select className="custom-select custom-select-sm bg-light" id="shippingcosts">
                        <option value="No option selected" id ="none">--Select Option--</option>
                        <option value="Urban" id ="urban">Urban Address</option>
                        <option value="Rural" id="rural">Rural Address</option>
                        <option value="OutsideAuckland" id="notAuck">Address outside of Auckland</option>
                </select> 
                <p id = "printShipping"></p><br/><br/><br/>

                <button type="button" id="shippingButt" onClick={this.getSelectedShipping}>Select this address type</button>

                </Tab>
                <Tab eventKey="pickup" title="Pickup" id="pick">
                    <br></br>
                    <h6>SELECT YOUR NEAREST BRANCH</h6>
                    <select className="custom-select custom-select-sm bg-light" id="pickupbranch">
                        <option value="No option selected" id ="none">--Select Option--</option>
                        <option value="Mount Eden" id ="mteden">Mount Eden</option>
                        <option value="East Tamaki" id="easttam">East Tamaki</option>
                        <option value="Albany" id="albany">Albany</option>
                    </select> 

                    <p id = "print">
                    </p>
                    <br/><br/><br/><br/><br/>

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

   


   
}
