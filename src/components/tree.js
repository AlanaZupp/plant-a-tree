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
        var string = this.state.name + " <br/><img src='"+this.state.pic+"'/>";
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

var oak = new Tree("Oak Tree", 150, "hardwood", "med", "sunny", "lowMain", "<1", "fastR", oakpic);

var spruce = new Tree("Spruce Tree", 200, "evergreen", "slow", "shade", "medMain", "2-3", "medR", sprucepic);

var jungle = new Tree("Jungle Tree", 250, "hardwood", "fast", "medSun", "highMain", ">3", "slowR", junglepic);

var apple = new Tree("Apple Tree", 150, "fruit", "med", "sunny", "medMain", "1-2", "medR", applepic);

var fern = new Tree("Fern Tree", 100, "native", "med", "shade", "lowMain", "1", "fastR", fernpic);

var accacia = new Tree("Accacia Tree", 100, "palm", "fast", "sunny", "medMain", "2-3", "fastR", acaciaPic);

var birch = new Tree("Birch Tree", 100, "hardwood", "med", "medSun", "highMain", "2-3", "slowR", birchPic);

var darkOak = new Tree("Dark Oak Tree", 500, "hardwood", "med", "shade", "medMain", "2-3", "slow", darkOakPic);

var hedge = new Tree("Hedge Tree", 34, "hedge", "fast", "shade", "lowMain", "1-2", "slowR", hedgePic);

var gum = new Tree("Gum Tree", 100, "gum", "fast", "medSun", "medMain", ">3", "fastR", nopic);

var trees = [oak, spruce, jungle, apple, fern, accacia, birch, darkOak, hedge, gum];
export {trees}