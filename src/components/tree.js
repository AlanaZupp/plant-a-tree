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
import "./searchpage.css";

export default class Tree extends React.Component {
    constructor(name, price, category, soil, sun, mainten, height, growth, image) {
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
            pic: image
        }
    }

    result_string()
    {        
        var string = "<div class='TreeObj'>"+
        "<u><b>"+this.state.name+"</b></u><br/>"+
        "<b>Category: </b>"+this.state.category+
        "<br/><b>Soil Drainage: </b>"+this.state.soilCon+
        "<br/><b>Sun Options: </b>"+this.state.sunCon+
        "<br/><b>Maintenance: </b>"+this.state.mainten+
        "<br/><b>Max height: </b>"+this.state.heightV+
        "<br/><b>Growth Rate: </b>"+this.state.gRate+
        "<br/><b>Price: $</b><span>"+this.state.price+"</span>"+ 
        "<br/><img src='"+this.state.pic+"'/><br/><br/>"+
        "<button class='cartButton'>Add To Cart</button>"+
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
                            <button type="button" class="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    

    display_row() {
        return (
            <div>
                <div className="list-group">
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
export { trees }