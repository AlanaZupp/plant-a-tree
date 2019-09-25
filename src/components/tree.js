import React from 'react';
import oakpic from "./treePics/oak.png";
import sprucepic from "./treePics/spruce.png";
import junglepic from "./treePics/jungle.png";
import applepic from "./treePics/apple.png";
import fernpic from "./treePics/fern.png";
import acaciaPic from "./treePics/acacia.png";
import birchPic from "./treePics/birch.png";
import darkOakPic from "./treePics/dOak.png";
import hedgePic from "./treePics/hedge.png";
import nopic from "./treePics/NO_IMAGE.png";

export default class Tree extends React.Component {
    constructor(name, price, category, soil, sun, mainten, height, growth, image) {
        super();
        this.state = {
            name:name,
            price:price,
            category:category, 
            soilCon:soil,
            sunCon:sun,
            mainten:mainten,
            heightV:height,
            gRate:growth,
            pic:image
        }
    }

    result_string()
    {
        var string = "<u><b>"+this.state.name+"</b></u><br/>"+
        "<b>Category: </b>"+this.state.category+
        "<br/><b>Soil Drainage: </b>"+this.state.soilCon+
        "<br/><b>Sun Options: </b>"+this.state.sunCon+
        "<br/><b>Maintenance: </b>"+this.state.mainten+
        "<br/><b>Max height: </b>"+this.state.heightV+
        "<br/><b>Growth Rate: </b>"+this.state.gRate+
        "<br/><b>Price: $</b>"+this.state.price+
        "<br/><img src='"+this.state.pic+"'/>";
        return string;
    }

    info_string()
    {
        var string = "";
        string += "<h3>" + this.state.name + "</h3>" +
        "<p><b>Category: </b>" + this.state.category + "</br>" +
        "<b>Soild Drainage:</b> " + this.state.soilCon + "</br>" +
        "<b>Sun Options:</b> " + this.state.sunCon + "</br>" +
        "<b>Maintenance:</b> " + this.state.mainten + "</br>" +
        "<b>Max Height:</b> " + this.state.heightV + "</br>" +
        "<b>Growth Rate:</b> " + this.state.gRate + "</br>" +
        "<b>Price:</b> $" + this.state.price + "</br></p>" +
        "<img src='"+this.state.pic+"' alt=' ' width='75' height='75'/>";
        return string;
    }

    
    render() {
        return(
            <div className="treecol">
                <h3>{this.state.name}</h3>
                <p>
                    <b>Category:</b> {this.state.category}<br></br>
                    <b>Soil Drainage: </b>{this.state.soilCon}<br></br>
                    <b>Sun Options:</b> {this.state.sunCon}<br></br>
                    <b>Maintenance:</b> {this.state.mainten}<br></br>
                    <b>Max height:</b>{this.state.heightV}<br></br>
                    <b>Growth Rate:</b>{this.state.gRate}<br></br>
                    <b>Price: </b>${this.state.price}
                </p>
                <img src = {this.state.pic} alt=" " width="75" height="75"/>
            </div>
        )
    }
    
    
}

var oak = new Tree("Oak Tree", 150, "hardwood", "med", "sunny", "low", "<1", "fast", oakpic);

var spruce = new Tree("Spruce Tree", 200, "evergreen", "slow", "shade", "med", "2-3", "med", sprucepic);

var jungle = new Tree("Jungle Tree", 250, "hardwood", "fast", "med", "high", ">3", "slow", junglepic);

var apple = new Tree("Apple Tree", 150, "fruit", "med", "sunny", "med", "1-2", "med", applepic);

var fern = new Tree("Fern Tree", 100, "native", "med", "shade", "low", "1", "fast", fernpic);

var accacia = new Tree("Accacia Tree", 100, "palm", "fast", "sunny", "med", "2-3", "fast", acaciaPic);

var birch = new Tree("Birch Tree", 100, "hardwood", "med", "med", "high", "2-3", "slow", birchPic);

var darkOak = new Tree("Dark Oak Tree", 500, "hardwood", "med", "shade", "med", "2-3", "slow", darkOakPic);

var hedge = new Tree("Hedge Tree", 34, "hedge", "fast", "shade", "low", "1-2", "slow", hedgePic);

var gum = new Tree("Gum Tree", 100, "gum", "fast", "med", "med", ">3", "fast", nopic);

var trees = [oak, spruce, jungle, apple, fern, accacia, birch, darkOak, hedge, gum];
export {trees}