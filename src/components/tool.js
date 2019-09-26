import React from 'react';
import shovelpic from "./toolPics/shovel.png";
import axepic from "./toolPics/axe.png";
import hoepic from "./toolPics/hoe.png";
import compostpic from "./toolPics/compost.png";
import fertpic from "./toolPics/fertilizer.png";

class Tool extends React.Component {
    constructor(name, price) {
        super();
        this.state = {
            name:name,
            price:price,
            pic:Image
        }
    }

    result_string()
    {
        var string = this.state.name + " <br/><img src='"+this.state.pic+"'/>";
        return string;
    }
}

var shovel = new Tool("Shovel", 15,shovelpic);
var axe = new Tool("Axe", 15,axepic);
var hoe = new Tool("Hoe", 15,hoepic);
var compost = new Tool("Composter", 10,compostpic);
var fert = new Tool("Fertilizer", 3,fertpic);

var tools = [shovel,axe,hoe,compost,fert];
export {tools}