import React from 'react';
import oakpic from "./treePics/oak.png";
import sprucepic from "./treePics/spruce.png";
import junglepic from "./treePics/jungle.png";
import applepic from "./treePics/apple.png";
import fernpic from "./treePics/fern.png";
import nopic from "./treePics/NO_IMAGE.png";

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"NAME NOT SET",
            category:"CATEGORY NOT SET", 
            soilCon:"SOIL CONDITION NOT SET",
            sunCon:"SUN LEVEL NOT SET",
            mainten:"MAINTENCE NOT SET",
            heightV:"HEIGHT NOT SET",
            gRate:"GROWTHRATE NOT SET",
            pic:nopic
        }
    }
}

var oak = new Tree();
oak.state.name = "Oak Tree";
oak.state.category = "hardwood";
oak.state.soilCon = "medDrain";
oak.state.sunCon = "sunny";
oak.state.mainten = "lowMain";
oak.state.heightV = "<1";
oak.state.gRate = "fastR";
oak.state.pic= oakpic;

var spruce = new Tree();
spruce.state.name = "Spruce Tree";
spruce.state.category = "hardwood";
spruce.state.soilCon = "slow";
spruce.state.sunCon = "shade";
spruce.state.mainten = "medMain";
spruce.state.heightV = "2-3";
spruce.state.gRate = "medR";
spruce.state.pic = sprucepic;

var jungle = new Tree();
jungle.state.name = "Jungle Tree";
jungle.state.category = "hardwood";
jungle.state.soilCon = "fast";
jungle.state.sunCon = "medSun";
jungle.state.mainten = "highMain";
jungle.state.heightV = ">3";
jungle.state.gRate = "slowR";
jungle.state.pic = junglepic;

var apple = new Tree();
apple.state.name = "Apple Tree";
apple.state.category = "fruit";
apple.state.soilCon = "medDrain";
apple.state.sunCon = "sunny";
apple.state.mainten = "medMain";
apple.state.heightV = "1-2";
apple.state.gRate = "medr";
apple.state.pic = applepic;

var fern = new Tree();
fern.state.name = "Fern Tree";
fern.state.category = "native";
fern.state.soilCon = "medDrain";
fern.state.sunCon = "shade";
fern.state.mainten = "lowMain";
fern.state.heightV = "<1";
fern.state.gRate = "fastR";
fern.state.pic = fernpic;

var trees = [oak, spruce, jungle, apple,fern];
export {trees}