import React from 'react';
import shovelpic from "./toolPics/shovel.png";
import axepic from "./toolPics/axe.png";
import hoepic from "./toolPics/hoe.png";
import compostpic from "./toolPics/compost.png";
import fertpic from "./toolPics/fertilizer.png";

import {setEventListener_tools} from './shoppingcart';

import "./searchpage.css";

export default class Tool extends React.Component {
    constructor(name, price, image) {
        super();
        this.state = {
            name,
            modalID: "modal" + name.replace(/ /g, ''),
            price,
            image
        }
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
                {setEventListener_tools.async()}
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
                        <img class="tree_img" src={this.state.image} alt={this.state.name} /><br></br>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#" + this.state.modalID}>More Info</button>
                    </div>
                </div>


            </div>
        )
    }

    info() {
        return (
            <div >
                <h3>{this.state.name}</h3>
                <img src={this.state.image} alt=" " />
                <p>
                    <b>Price: </b>$<span>{this.state.price}</span><br></br>
                </p>
                
            </div>
        )
    }

}


var shovel = new Tool("Shovel", 15,shovelpic);
var axe = new Tool("Axe", 15,axepic);
var hoe = new Tool("Hoe", 15,hoepic);
var compost = new Tool("Composter", 10,compostpic);
var fert = new Tool("Fertilizer", 3,fertpic);

var tools = [shovel,axe,hoe,compost,fert];
export {tools}