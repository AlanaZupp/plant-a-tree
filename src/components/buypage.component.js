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
                <span>ENTER NAME</span><br/>

                <span>ENTER CONTACT NUMBER</span><br/>

                <span>ENTER ADDRESS</span><br/>
            </div>

            </div>
        )
    }
}