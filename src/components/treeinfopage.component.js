import React, {Component} from 'react';
import {trees} from "./tree.js";
import './homepage.css';
import "./searchpage.css";

export default class TreeInfo extends Component{
    render(){
        return(
            <div className="fullPage">
            <div className="searchBar">
                <p>Tree Facts</p>
            </div>

            <div className="treeList" id="treeList">
                <br></br>
                {
                    trees.map(tree => (
                        tree.render()
                    ))
                }
            </div>

            {/* select options to restrict the tree you wanna see 
            <div className ="options">
                <select className="custom-select" id="treeselect">
                            <option selected value="none">Category</option>
                            <option value="acacia">Acacia Tree</option>
                            <option value="apple">Apple Tree</option>
                            <option value="birch">Birch Tree</option>
                            <option value="dOak">Dark Oak</option>
                            <option value="fern">Fern Tree</option>
                            <option value="hedge">Hedge Tree</option>
                            <option value="jungle">Jungle Tree</option>
                            <option value="oak">Oak Tree</option>
                            <option value="spruce">Spruce Tree</option>
                            <option value="gum">Gum Tree</option>
                        </select>
                <br></br><button type = "button" onClick="">Choose Tree</button> 
            </div>*/}

            </div>
        )
    }
}