import React, {Component} from 'react';
import farm from "./treePics/farm.png";
import acacia from "./treePics/acacia.png";
import birch from "./treePics/birch.png";
import dOak from "./treePics/dOak.png";
import hedge from "./treePics/hedge.png";
import apple from "./treePics/apple.png";
import fern from "./treePics/fern.png";
import jungle from "./treePics/jungle.png";
import oak from "./treePics/oak.png";
import spruce from "./treePics/spruce.png";
import './homepage.css';

export default class HomePage extends Component{

   treeInfopage(){
        window.location.href ="./treeinfo"
   }

    render(){
        return(
            <div className="fullPage">
            <div className="searchBar">
                <p>Home</p>
            </div>
            <div className = "photo">
                   <img src = {farm} alt=" " width="1110" height="455" align = "right"/>
            </div>
            
            <div className = "column">
                <h2>ABOUT US</h2>
                <p>TreeCo is a company which imports, grows, and sells trees. We also sell gardening products which help with growing and maintaining the trees. <br></br>We grow our trees from a national chain of 10 nurseries. </p>
            </div>

            <div className = "column">
                <h2>OUR TREES ARE FOR </h2>
                <p><h6>- Landscape Gardeners</h6><h6>- Housing Developers</h6><h6>- Local Councils</h6><h6>- DIY Gardeners</h6></p>
            
           </div>
           
            <div className ="column"> 
                <h2>OUR TREE GALLERY</h2>
                <p>Click the trees to find out more information about them!</p>
                <img src = {acacia} alt=" " width="100" height="100" onClick={this.treeInfopage}/>
                <img src = {apple} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {birch} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {dOak} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {fern} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {hedge} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {jungle} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {oak} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
                <img src = {spruce} alt=" " width="100" height="100"onClick={this.treeInfopage}/>
            </div>

            <div className = "">
                    <h2>OUR BRANCHES</h2>
                    <p>We have branches in: .....</p>
            </div>
            
            </div>
        )
    }
}