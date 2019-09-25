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
import "./homepage.css";

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
                <h2>OUR TREES ARE FOR </h2>
                <p>- Landscape Gardeners<br></br>- Housing Developers<br></br>- Local Councils<br></br>- DIY Gardeners</p>
            </div>

            <div className = "column">
                    <h2>OUR BRANCHES</h2>
      
        <h6><b>Mount Eden Branch</b></h6>

        <a href ={"https://goo.gl/maps/En2gUntUQMSgftUR7"} target="popup">445 Mount Eden Road, Mount Eden, Auckland, 1024</a>
        <br></br><u>Contact ph:</u> Stephen Beck (09) 789 4455
       
        <h6><b><br></br>East Tamaki Branch</b></h6>
        <a href ={"https://goo.gl/maps/mDPRhHWuJGqkUadh6"} target="popup">29 Kerwyn Avenue, East Tamaki, Auckland, 2013</a>
        <br></br><u>Contact ph:</u> Amy Anderson (09) 789 4444
        
        <h6><b><br></br>Albany Branch</b></h6>
        <a href ={"https://goo.gl/maps/79fb5UXJUpKVJwAGA"} target="popup">67 Kell Drive, Albany, Auckland 0632</a>
        <br></br><u>Contact ph:</u> Chris Wilson (09) 789 1458
            </div>
            
           
            <div className ="column"> 
                <h2>OUR TREE GALLERY</h2>
                <p>Click the trees to find out their facts!</p>
                <img src = {acacia} alt=" " width="90" height="90" onClick={this.treeInfopage}/>
                <img src = {apple} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {birch} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {dOak} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {fern} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {hedge} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {jungle} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {oak} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
                <img src = {spruce} alt=" " width="90" height="90"onClick={this.treeInfopage}/>
            </div>

          
         
            </div>
        )
    }
}