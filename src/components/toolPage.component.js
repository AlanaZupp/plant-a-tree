import React, { Component } from 'react';
import { tools } from "./tool.js";
import './homepage.css';
import "./searchpage.css";

export default class ToolInfo extends Component {
    constructor() {
        super();

        this.state = {
            tool: tools[0]
        }
    }
    render() {
        return (
            <div className="fullPage">
                <div className="searchBar"></div>

                <div className="container treeList" id="treeList">
                    <div className="row">
                        {
                            tools.map(tree => (
                                tree.modal_display()
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}