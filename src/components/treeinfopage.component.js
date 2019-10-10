import React, { Component } from 'react';
import { trees } from "./tree.js";
import './homepage.css';
import "./searchpage.css";

export default class TreeInfo extends Component {
    constructor() {
        super();

        this.state = {
            tree: trees[0]
        }
    }
    render() {
        return (
            <div className="fullPage">
                <div className="searchBar"></div>

                <div className="container treeList" id="treeList">
                    <div className="row">
                        {
                            trees.map(tree => (
                                tree.modal_display()
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}