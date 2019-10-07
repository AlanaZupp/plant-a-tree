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
import {setEventListener} from './shoppingcart';
import "./searchpage.css";

export default class Tree extends React.Component {
    constructor(name, price, category, soil, sun, mainten, height, growth, image, fact, minfo) {
        super();
        this.state = {
            name: name,
            modalID: "modal" + name.replace(/ /g, ''),
            price: price,
            category: category,
            soilCon: soil,
            sunCon: sun,
            mainten: mainten,
            heightV: height,
            gRate: growth,
            pic: image,
            fact: fact,
            m_info: minfo
        }
    }

    result_string()
    {        
        //removed class button, cartButton as it crashing when reading this string
        var string = "<div class='TreeObj'>"+
        "<u><b>"+this.state.name+"</b></u><br/>"+
        "<b>Category: </b>"+this.state.category+
        "<br/><b>Soil Drainage: </b>"+this.state.soilCon+
        "<br/><b>Sun Options: </b>"+this.state.sunCon+
        "<br/><b>Maintenance: </b>"+this.state.mainten+
        "<br/><b>Max height: </b>"+this.state.heightV+
        "<br/><b>Growth Rate: </b>"+this.state.gRate+
        "<br/><b>Price: $</b><span>"+this.state.price+"</span>"+ 
        "<br/><img src='"+this.state.pic+"' width='150' height='150'/><br/><br/>"+
        "<button class='' id='subButt'>Add To Cart</button>"+
        "</div>";
        return string;
    }

    modal_display() {
        return (
            <div>
                {this.display_row()}
                {this.modal()}
            </div>
        )
    }

    modal() {
        return (
            <div class="modal fade" id={this.state.modalID} tabindex="-1" role="dialog" aria-labelledby="treeModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="treeModalLabel">{this.state.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {this.info()}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary cartButton" onClick="addItem()">Add To Cart</button>
                        </div>
                    </div>
                </div>
                {setEventListener.async()}
            </div>
        )
    }

    

    display_row() {
        return (
            <div>
                <div className="list-group tree_info">
                    <div className="card" data-toggle="modal" data-target="#portfolioModal0">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{this.state.name}</h5>
                            <small>${this.state.price}</small>
                        </div>
                        <img src={this.state.pic} alt={this.state.name} /><br></br>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#" + this.state.modalID}>More Info</button>
                    </div>
                </div>


            </div>
        )
    }

    info_string() {
        var string = "";
        string += "<h3>" + this.state.name + "</h3>" +
            "<p><b>Category: </b>" + this.state.category + "</br>" +
            "<b>Soild Drainage:</b> " + this.state.soilCon + "</br>" +
            "<b>Sun Options:</b> " + this.state.sunCon + "</br>" +
            "<b>Maintenance:</b> " + this.state.mainten + "</br>" +
            "<b>Max Height:</b> " + this.state.heightV + "</br>" +
            "<b>Growth Rate:</b> " + this.state.gRate + "</br>" +
            "<b>Price:</b> $" + this.state.price + "</br></p>" +
            "<img src='" + this.state.pic + "' alt=' ' width='75' height='75'/>";
        return string;
    }

    info_row() {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="mx-auto text-center">
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
                    <img src={this.state.pic} alt=" " />
                </div>
            </div>
        )
    }

    info() {
        return (
            <div >
                <h3>{this.state.name}</h3>
                <img src={this.state.pic} alt=" " />
                <p>
                    <b>Category:</b> {this.state.category}<br></br>
                    <b>Soil Drainage: </b>{this.state.soilCon}<br></br>
                    <b>Sun Options:</b> {this.state.sunCon}<br></br>
                    <b>Maintenance:</b> {this.state.mainten}<br></br>
                    <b>Max height:</b>{this.state.heightV}<br></br>
                    <b>Growth Rate:</b>{this.state.gRate}<br></br>
                    <b>Price: </b>$<span>{this.state.price}</span><br></br>
                    <b>Fact:</b><span> {this.state.fact}</span>
                </p>
                
            </div>
        )
    }


    render() {
        return (

            <div className="mx-auto text-center">
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
                <img src={this.state.pic} alt=" " />

            </div>
        )
    }

}

var oak = new Tree("Oak Tree", 150, "hardwood", "med", "sunny", "low", "<1", "fast", oakpic,
 "Oak trees are unique in that they have the smallest space requirements, and along with dark oak trees can drop an apple when their leaf block is destroyed.",
 "Oak: Keep this tree in a sunny spot and not too close to other trees.");

var spruce = new Tree("Spruce Tree", 200, "evergreen", "slow", "shade", "med", "2-3", "med", sprucepic,
"Spruce trees, also known as pine trees, grow from spruce saplings and have growth patterns and requirements very similar to birch trees, though they look very different.",
"Spruce: Best kept in shady areas, likes to be around other spruce trees.");

var jungle = new Tree("Jungle Tree", 250, "hardwood", "fast", "med", "high", ">3", "slow", junglepic,
"Jungle trees are exclusive to the jungle biome. Jungle tree leaves drop jungle tree saplings, which appear tall and skinny like the jungle tree itself.",
"Jungle Tree: Keep this tree planted in a jungle biome for best results.");

var apple = new Tree("Apple Tree", 150, "fruit", "med", "sunny", "med", "1-2", "med", applepic,
"Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, is still found today.",
"Apple Tree: Keep this anywhere, and don't forget to harvest they delicious fruit.");

var fern = new Tree("Fern Tree", 100, "native", "med", "shade", "low", "1", "fast", fernpic,
"Ferns spawn on grass block, but can only be found in jungle biomes. Destroying ferns will sometimes drop seeds.",
"Fern: Keep this planted in a jungle biome for best results.");

var accacia = new Tree("Accacia Tree", 100, "palm", "fast", "sunny", "med", "2-3", "fast", acaciaPic,
"Acacia trees are only found in the savanna biome. Acacia trees are around 8 blocks tall and feature unique diagonal trunks, and may occasionally have multiple canopies.",
"Acacia: Keep this planted in a sunny area, preferably in a savannah biome.");

var birch = new Tree("Birch Tree", 100, "hardwood", "med", "med", "high", "2-3", "slow", birchPic,
"Birch trees look fairly similar to small oak trees in terms of height, and are most commonly found in birch forest biomes.",
"Birch: Plant this tree nearly anywhere, just don't forget to take care of it.");

var darkOak = new Tree("Dark Oak Tree", 500, "hardwood", "med", "shade", "med", "2-3", "slow", darkOakPic,
"Dark oak trees are found only in the dark forest biome. They have thick, 2×2 trunks, and will generate dirt blocks under their trunk if generated on a steep cliff.",
"Dark Oak: Keep this tree in lots of shade, preferably in a dark forrest biome.");

var hedge = new Tree("Hedge Tree", 34, "hedge", "fast", "shade", "low", "1-2", "slow", hedgePic,
"Leaves occur naturally on trees throughout the Overworld. Oak leaves also generate in woodland mansions.",
"Hedge: Keep this anywhere, just don't forget to water and trim it once in a while.");

var gum = new Tree("Gum Tree", 100, "gum", "fast", "med", "med", ">3", "fast", nopic,
"Gum trees have bark that is either smooth, fibrous, hard or stringy, and leaves with oil glands. The fruit is a woody capsule commonly referred to as a gumnut",
"Gum Tree: Plant this tree almost anywhere.");

var trees = [oak, spruce, jungle, apple, fern, accacia, birch, darkOak, hedge, gum];
export { trees }