import React, {Component} from 'react';

export default class ShoppingCart extends React.Component{

    //Add EventListener to all Cart Buttons
    AddEventListener(){
        const cartBtn = document.querySelectorAll('addBtn');
        cartBtn.AddEventListener('click', function(event){
            alert(event.target);
        });
    }

    //Add Items to Cart
    addItem(){
        //Get All Required Info and Apply to an Item Object
        const item = {};

        var img = "#"   //TODO: Retrieve Img Src
        item.img = img;

        var name = "test";  // TODO: Retrieve Elements TextContent
        item.name = name;

        var price = "10";   //TODO: Retrieve Elements TextContent of Price
        //TODO: May have to Clean Price String to Number
        item.price = price;

        //Add New Div for shopping cart
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item','d-flex','justidy-content-between')

        cartItem.innterHTML = `
            <img src=${item.img}/>
            <p>${item.name}}</p>
            <div>
                <span>$</span>
                <span>${item.price}</span>
            </div>
        `;   
        
        //Select Cart and Insert new Item
        const cart = document.getElementsByClassName('cartPurchasedItems');
        cart.insert(cartItem);
        
        alert("Added to Cart");
        
    }
}
