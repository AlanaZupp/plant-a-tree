import React, {Component} from 'react';

export default class BuyPage extends Component{
    render(){
        return(
            <div className="fullPage">
            <div className="searchBar">
                <p>Store</p>
            </div>
            <div id="paymentDiv">
                <h3>Your Purchase</h3><br/>
                
                <div id="purchaseItemList">
                    {/* PurchaseItem go Here */}
                    
                    <div id="purchaseTotalDiv">
                        <span>Total: $</span>
                        <span id="purchaseTotal"></span>                    
                    </div>
                </div>                
            </div><br/>

            <div className="personalInfomation">
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

                    <label>Address: </label>
                    <span> </span>
                    <input name="address" type="text"></input>
                    <br/><br/>



                    <button type="submit">Confirm Purchase</button>
                </form>

                <span>ENTER ADDRESS</span><br/>

                <span>PAYMENT METHODS</span>

                <span>COMFIRM PAYMENT METHOD</span>
            </div>
            </div>
        )
    }
}