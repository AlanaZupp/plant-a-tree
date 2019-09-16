import React, {Component} from 'react';
import "./searchpage.css";

//array of json tree objects
import {trees} from "./treeSelect.js";

export default class SearchPage extends Component{
    render(){
        return(
            <div className="fullPage">
                <div className="searchBar">
                    <p>Find the tree(s) you're looking for...</p>
                    <div className="search">
                        <input type="text" placeholder="Search.."></input>
                    </div>
                </div>
                <div className="options">
                    <p>Category</p><br/>
                    <form id="categoryF">
                        <label>Fruit Tree</label>
                        <input type="radio" name="category" value="fruit" defaultChecked/>
                        <label>Hedge</label>
                        <input type="radio" name="category" value="hedge"/>
                        <label>Evergreen</label>
                        <input type="radio" name="category" value="evergreen"/>
                        <label>Nz Native</label>
                        <input type="radio" name="category" value="native"/>
                        <label>Gum Tree</label>
                        <input type="radio" name="category" value="gum"/>
                        <label>Palm Tree</label>
                        <input type="radio" name="category" value="palm"/>
                        <label>Hardwood</label>
                        <input type="radio" name="category" value="hardwood"/>
                    </form><br/>
                    <p>Conditions</p><br/><br/>
                    <p className="subtitle">Soil Drainage</p>
                    <form id="soilConF">
                        <label>Fast</label>
                        <input type="radio" name="soilCon" value="fast" defaultChecked/>
                        <label>Med</label>
                        <input type="radio" name="soilCon" value="medDrain"/>
                        <label>Slow</label>
                        <input type="radio" name="soilCon" value="slow"/>
                        <label>Any</label>
                        <input type="radio" name="soilCon" value="anyDrain"/>
                    </form>
                    <br/><p className="subtitle">Sunlight</p>
                    <form id="sunConF">
                        <label>Sunny</label>
                        <input type="radio" name="sunCon" value="sunny" defaultChecked/>
                        <label>Medium</label>
                        <input type="radio" name="sunCon" value="medSun"/>
                        <label>Shady</label>
                        <input type="radio" name="sunCon" value="shade"/>
                        <label>Any</label>
                        <input type="radio" name="sunCon" value="anySun"/>
                    </form><br/>
                    <p>Maintenance</p><br/>
                    <form id="maintenF">
                        <label>High</label>
                        <input type="radio"  name="mainten" value="highMain" defaultChecked/>
                        <label>Medium</label>
                        <input type="radio"  name="mainten" value="medMain"/>
                        <label>Low</label>
                        <input type="radio"  name="mainten" value="lowMain"/>
                    </form>
                    <p>Max Tree Height</p><br/><br/>
                    <p>Growth Rate</p><br/><br/>
                    <p>Price</p><br/><br/>
                    <button type="button" onClick={this.check}>Submit</button><br/><br/>
                    <p id="result"></p><br/>
                    <p id="image"></p>
                </div>
            </div>
        )
    }

    check(){
        for(var i = 0; i<trees.length;i++ )
        {
            if((document.getElementById('categoryF').category.value===trees[i].category)&&
            (document.getElementById('soilConF').soilCon.value===trees[i].soilCon)&&
            (document.getElementById('sunConF').sunCon.value===trees[i].sunCon)&&
            (document.getElementById('maintenF').mainten.value===trees[i].mainten))
            {
                console.log("Result;"+trees[i].name);
                document.getElementById('result').innerHTML="The Result was: "+trees[i].name;
                document.getElementById('image').innerHTML="<img src='"+trees[i].pic+"'/>";
            }
        }
    }
}