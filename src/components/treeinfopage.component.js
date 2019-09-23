import React, {Component} from 'react';
import acacia from "./treePics/acacia.png";
import birch from "./treePics/birch.png";
import dOak from "./treePics/dOak.png";
import hedge from "./treePics/hedge.png";
import apple from "./treePics/apple.png";
import fern from "./treePics/fern.png";
import jungle from "./treePics/jungle.png";
import oak from "./treePics/oak.png";
import spruce from "./treePics/spruce.png";
import gum from "./treePics/NO_IMAGE.png";
import './homepage.css';
import "./searchpage.css";

export default class TreeInfo extends Component{
   
    render(){
        return(
            <div className="fullPage">
            <div className="searchBar">
                <p>Tree Info Page...</p>
            </div>

            
            {/* this is for aligning the pictures at the top of the page
             <div className="treeimg">
                
                
            </div> */}
            <div className="treecol">
                <h3>ACACIA TREE</h3>
                <p><b>Category:</b> Palm Tree <br></br><b>Soil Drainage: </b>Fast<br></br><b>Sun Options:</b> Sunny<br></br>
                <b>Maintenance:</b> Medium<br></br><b>Max height:</b>2-3M<br></br><b>Growth Rate:</b> Fast<br></br><b>Price: </b>$23</p>
                <img src = {acacia} alt=" " width="75" height="75"/>
            </div>
            
            <div className="treecol">
                <h3>APPLE TREE</h3>
                <p><b>Category:</b> Fruit Tree <br></br><b>Soil Drainage: </b>Medium<br></br><b>Sun Options:</b> Sunny<br></br>
                <b>Maintenance:</b> Medium<br></br><b>Max height:</b>1-2M<br></br><b>Growth Rate:</b> Medium<br></br><b>Price: </b>$25</p>
                <img src = {apple} alt=" " width="75" height="75"/>
            </div>
            
            <div className="treecol">
                <h3>BIRCH TREE</h3>
                <p><b>Category:</b> Hardwood <br></br><b>Soil Drainage: </b>Medium<br></br><b>Sun Options:</b> Medium<br></br>
                <b>Maintenance:</b> Low<br></br><b>Max height:</b>1-2M<br></br><b>Growth Rate:</b> Medium<br></br><b>Price: </b>$65</p>
                <img src = {birch} alt=" " width="75" height="75"/>

            </div>
            
            <div className="treecol">
                <h3>DARK OAK TREE</h3>
                <p><b>Category:</b> Hardwood <br></br><b>Soil Drainage: </b>Medium<br></br><b>Sun Options:</b> Shade<br></br>
                <b>Maintenance:</b> Medium<br></br><b>Max height:</b>2-3M<br></br><b>Growth Rate:</b> Slow<br></br><b>Price: </b>$59</p>
                <img src = {dOak} alt=" " width="75" height="75"/>

            </div>
          
            <div className="treecol">
                <h3>FERN TREE</h3>
                <p><b>Category:</b> NZ Native <br></br><b>Soil Drainage: </b>Slow<br></br><b>Sun Options:</b> Shade<br></br>
                <b>Maintenance:</b> Low<br></br><b>Max height:</b>1-2M<br></br><b>Growth Rate:</b> Slow<br></br><b>Price: </b>$45</p>
                <img src = {fern} alt=" " width="75" height="75"/>
            </div>

            <div className="treecol">
                <h3>GUM TREE</h3>
                <p><b>Category:</b> Gum Tree <br></br><b>Soil Drainage: </b>Fast<br></br><b>Sun Options:</b> Medium<br></br>
                <b>Maintenance:</b> High<br></br><b>Max height:</b>>3M<br></br><b>Growth Rate:</b> Fast<br></br><b>Price: </b>$7</p>
                <img src = {gum} alt=" " width="75" height="75"/>
            </div>

            <div className="treecol">
                <h3>HEDGE TREE</h3>
                <p><b>Category:</b> Hedge <br></br><b>Soil Drainage: </b>Fast<br></br><b>Sun Options:</b> Sunny<br></br>
                <b>Maintenance:</b> High<br></br><b>Max height:</b>1M<br></br><b>Growth Rate:</b> Medium<br></br><b>Price: </b>$9</p>
                <img src = {hedge} alt=" " width="75" height="75"/>
            </div>
        
            <div className="treecol">
                <h3>JUNGLE TREE</h3>
                <p><b>Category:</b> Hardwood <br></br><b>Soil Drainage: </b>Fast<br></br><b>Sun Options:</b> Medium<br></br>
                <b>Maintenance:</b> High<br></br><b>Max height:</b>>3M<br></br><b>Growth Rate:</b> Slow<br></br><b>Price: </b>$13</p>
                <img src = {jungle} alt=" " width="75" height="75"/>
            </div>
           
            <div className="treecol">
                <h3>OAK TREE</h3>
                <p><b>Category:</b> Hardwood <br></br><b>Soil Drainage: </b>Medium<br></br><b>Sun Options:</b> Sunny<br></br>
                <b>Maintenance:</b> Low<br></br><b>Max height:</b>1M<br></br><b>Growth Rate:</b> Fast<br></br><b>Price: </b>$99</p>
                <img src = {oak} alt=" " width="75" height="75"/>

            </div>
            
            <div className="treecol">
                <h3>SPRUCE TREE</h3>
                <p><b>Category:</b> Evergreen <br></br><b>Soil Drainage: </b>Slow<br></br><b>Sun Options:</b> Shade<br></br>
                <b>Maintenance:</b> Medium<br></br><b>Max height:</b>2-3M<br></br><b>Growth Rate:</b> Medium<br></br><b>Price: </b>$30</p>
                <img src = {spruce} alt=" " width="75" height="75"/>
            </div>

            {/* select options to restrict the tree you wanna see */}
            <div className ="options">
            <select class="custom-select" id="treeselect">
                        <option selected value="none">Category</option>
                        <option value="acacia">Acacia Tree</option>
                        <option value="apple">Apple Tree</option>
                        <option value="birch">Birch Tree</option>
                        <option value="dOak">Dark Oak</option>
                        <option value="fern">Fern Tree</option>
                        <option value="hedge">Hedge Tree</option>
                        <option value="jungle">Jungle Tree</option>
                        <option value="oak">Oak Tree</option>
                        <option value="spruce">Spruce Tree</option>
                        <option value="gum">Gum Tree</option>
                    </select>
            <br></br><button type = "button" onClick="">Choose Tree</button> {/* make a function to check this and display only that tree */}
            </div>


            </div>
        )
    }

}