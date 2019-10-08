import "./searchpage.css";

Function.prototype.async = function () {
    setTimeout.bind(null, this, 0).apply(null, arguments);
};

export function setEventListener(){
    var button = document.getElementsByClassName("cartButton");    
    for(var i = 0; i < button.length; i++)
    {
        button[i].onclick = addItem;
    }
}

export function setEventListener_removeItem(){
    var button = document.getElementsByClassName("removeItem");    
    for(var i = 0; i < button.length; i++)
    {
        button[i].onclick = removeItem;
    }
}

//Add Items to Cart
export function addItem(){
    //Get All Required Info and Apply to an Item Object
    const item = {};

    var img = this.parentElement.parentElement.children[1].children[0].children[1].src;        //TODO: Retrieve Img Src
    item.img = img;

    var name = this.parentElement.parentElement.children[1].children[0].children[0].textContent;  //Grab Object Title (Tree/Tool Name)
    item.name = name;

    var price =this.parentElement.parentElement.children[1].children[0].children[2].children[13].textContent; //Grabs Price of Object
    item.price = price;

    //Add New Div for shopping cart
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item","d-flex","justify-content-between")
    

    cartItem.innerHTML = `
        <img class='cart-img' src='${item.img}'=/>
        <p>${item.name}</p>
        <div>
            <span>$</span>
            <span class="itemPrice">${item.price}</span>
        </div>
        <button class="removeItem">X</button>
    `;   
    
    //Select Cart and Insert new Item
    const cart = document.getElementById("ShoppingCartObj");
    const total = document.querySelector(".totalPriceDiv");
    
    cart.insertBefore(cartItem, total);
    
    //alert("Added to Cart");   //TODO: Added to Cart Pop-up

    showTotals();
    setEventListener_removeItem.async();    
}

export function removeItem() {
    this.parentElement.remove();    
    showTotals();
}

export function clearCart() {
    const items = document.getElementsByClassName("cart-item");

    for(var i = items.length - 1; i >= 0; i--)  //i-- as remove goes from largest number to smallest element. i.e. from element 4 then element 3 etc
    {            
        items[i].remove();
    }    
    showTotals();
}


//TODO: Remove Current Items on Purchase List
export function generatePurchaseList(){
    const items = document.getElementsByClassName("purchaseItem");

    for(var i = items.length - 1; i >= 0; i--)  //i-- as remove goes from largest number to smallest element. i.e. from element 4 then element 3 etc
    {            
        items[i].remove();
    }    

    const purchaseList = [];
    const shoppingList = document.getElementsByClassName("cart-item");

    for(var i = 0; i < shoppingList.length; i++) 
    {            
        var name = shoppingList[i].children[1].textContent;
        var price = shoppingList[i].children[2].children[1].textContent;
        var img = shoppingList[i].children[0].src;

        const purchaseItem = document.createElement("div");
        purchaseItem.classList.add("purchaseItem");
        
        purchaseItem.innerHTML =  
        `
            <img class='cart-img' src="${img}"/>
            <span>${name}</span>
            <span>$</span>
            <span class=purchasePrice>${price}</span>                
        `;
        purchaseList.push(purchaseItem);
    } 

    loadPurchaseList.async(purchaseList);

}

function loadPurchaseList(purchaseList){

    //Attach all Items to the PurchaseDivision
    const cart = document.getElementById("purchaseItemList");
    const total = document.querySelector("#purchaseTotalDiv");

    for(var i = 0; i < purchaseList.length; i++)
    {
        cart.insertBefore(purchaseList[i], total);
    }
    //Get Total price
    const prices = [];
    const items = document.getElementsByClassName("purchasePrice");

    for(var i = 0; i < items.length; i++)
    {
        prices.push(parseFloat(items[i].textContent));
    }

    const totalPrice = prices.reduce(function(prices, item) {
        prices += item;
        return prices;
    }, 0); 
    
    const finalPrice = totalPrice.toFixed(2);

    document.getElementById("purchaseTotal").textContent = finalPrice;
}

function showTotals(){

    const total = [];
    const items = document.getElementsByClassName("itemPrice");

    for(var i = 0; i < items.length; i++)
    {
        total.push(parseFloat(items[i].textContent));
    }

    const totalMoney = total.reduce(function(total, item) {
        total += item;
        return total;
    }, 0);

    const finalMoney = totalMoney.toFixed(2);

    document.getElementById("totalPrice").textContent = finalMoney;

    const iCounts = document.getElementsByClassName("itemCount");
    for(var i = 0; i < iCounts.length; i++)
    {
        iCounts[i].textContent = total.length;
    }

}