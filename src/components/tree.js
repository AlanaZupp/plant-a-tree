import React from 'react';
import oakpic from "./treePics/oak.png";
import sprucepic from "./treePics/spruce.png";
import junglepic from "./treePics/jungle.png";
import applepic from "./treePics/apple.png";
import fernpic from "./treePics/fern.png";
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
        var string = this.state.name + " <img src='"+this.state.pic+"'/>";
        return string;
    }
}

var oak = new Tree("Oak Tree", 150, "hardwood", "medDrain", "sunny", "lowMain", "<1", "fastR", oakpic);

var spruce = new Tree("Spruce Tree", 200, "hardwood", "slow", "shade", "medMain", "2-3", "medR", sprucepic);

var jungle = new Tree("Jungle Tree", 250, "hardwood", "fast", "medSun", "highMain", ">3", "slowR", junglepic);

var apple = new Tree("Apple Tree", 150, "fruit", "medDrain", "sunny", "medMain", "1-2", "medR", applepic);

var fern = new Tree("Fern Tree", 100, "native", "medDrain", "shade", "lowMain", "1", "fastR", fernpic);

var trees = [oak, spruce, jungle, apple,fern];
export {trees}