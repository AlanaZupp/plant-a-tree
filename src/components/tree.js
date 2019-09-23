import React from 'react';
import oakpic from "./treePics/oak.png";
import sprucepic from "./treePics/spruce.png";
import junglepic from "./treePics/jungle.png";
import applepic from "./treePics/apple.png";
import fernpic from "./treePics/fern.png";
import hedgepic from "./treePics/hedge.png";
import acaciapic from "./treePics/acacia.png";
import dOakpic from "./treePics/dOak.png";
import birchpic from "./treePics/birch.png";
import nopic from "./treePics/NO_IMAGE.png";

class Tree extends React.Component {
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
}

var oak = new Tree("Oak Tree", 150, "hardwood", "medDrain", "sunny", "lowMain", "<1", "fastR", oakpic);

var spruce = new Tree("Spruce Tree", 200, "evergreen", "slow", "shade", "medMain", "2-3", "medR", sprucepic);

var jungle = new Tree("Jungle Tree", 250, "hardwood", "fast", "medSun", "highMain", ">3", "slowR", junglepic);

var apple = new Tree("Apple Tree", 150, "fruit", "medDrain", "sunny", "medMain", "1-2", "medR", applepic);

var fern = new Tree("Fern Tree", 100, "native", "medDrain", "shade", "lowMain", "1", "fastR", fernpic);

var hedge = new Tree("Hedge Tree", "hedge", "fast", "sunny", "highMain", "<1", "medR", hedgepic);

var acacia = new Tree("Acacia Tree","palm","fast","sunny","medMain","2-3","fastR",acaciapic);

var dOak = new Tree("Dark Oak Tree","hardwood","medDrain","shade","medMain","2-3","slowR",dOakpic);
var birch = new Tree("Birch Tree","hardwood","medDrain","medSun","lowMain","1-2","medR",birchpic);
var gum = new Tree("Gum Tree","gum","fast","medSun","highMain",">3","fastR",nopic);

var trees = [oak, spruce, jungle, apple,fern,hedge,acacia,dOak,birch,gum];
export {trees}