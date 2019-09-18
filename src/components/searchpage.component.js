import React, {Component} from 'react';
import "./searchpage.css";

//array of json tree objects
import {trees} from "./tree.js";
var results;

//class that creates and holds the form for filtering between tree types upon search
//will return list of tree objects that meet the users criteria.
export default class SearchPage extends Component{
    render(){
        return(
            <div className="fullPage">
                <div className="searchBar">
                    <p>Find the tree(s) you're looking for...</p>
                    <div className="search">
                        <input type="text" placeholder="Search.." id="searchBox"></input>
                        <button type="button" onClick={this.searchRes}>Search</button><br/><br/>
                    </div>
                </div>
                <div className="options">
                    <p>Category</p><br/>
                    <form id="categoryF">
                        <label>Unchecked</label>
                        <input type="radio" name="category" value="none" defaultChecked/>
                        <label>Fruit Tree</label>
                        <input type="radio" name="category" value="fruit" />
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
                        <label>Unchecked</label>
                        <input type="radio" name="soilCon" value="none" defaultChecked/>
                        <label>Fast</label>
                        <input type="radio" name="soilCon" value="fast"/>
                        <label>Med</label>
                        <input type="radio" name="soilCon" value="medDrain"/>
                        <label>Slow</label>
                        <input type="radio" name="soilCon" value="slow"/>
                        <label>Any</label>
                        <input type="radio" name="soilCon" value="anyDrain"/>
                    </form>
                    <br/><p className="subtitle">Sunlight</p>
                    <form id="sunConF">
                        <label>Unchecked</label>
                        <input type="radio" name="sunCon" value="none" defaultChecked/>
                        <label>Sunny</label>
                        <input type="radio" name="sunCon" value="sunny"/>
                        <label>Medium</label>
                        <input type="radio" name="sunCon" value="medSun"/>
                        <label>Shady</label>
                        <input type="radio" name="sunCon" value="shade"/>
                        <label>Any</label>
                        <input type="radio" name="sunCon" value="anySun"/>
                    </form><br/>
                    <p>Maintenance</p><br/>
                    <form id="maintenF">
                        <label>Unchecked</label>
                        <input type="radio" name="mainten" value="none" defaultChecked/>
                        <label>High</label>
                        <input type="radio"  name="mainten" value="highMain"/>
                        <label>Medium</label>
                        <input type="radio"  name="mainten" value="medMain"/>
                        <label>Low</label>
                        <input type="radio"  name="mainten" value="lowMain"/>
                    </form>
                    <p>Max Tree Height</p><br/>
                    <form id="heightF">
                        <label>Unchecked</label>
                        <input type="radio" name="heightV" value="none" defaultChecked/>
                        <label>Less than 1M</label>
                        <input type="radio"  name="heightV" value="<1"/>
                        <label>1-2M</label>
                        <input type="radio"  name="heightV" value="1-2"/>
                        <label>2-3M</label>
                        <input type="radio"  name="heightV" value="2-3"/>
                        <label>Greater than 3M</label>
                        <input type="radio"  name="heightV" value=">3"/>
                    </form>
                    <p>Growth Rate</p><br/><br/>
                    <form id="growthF">
                        <label>Unchecked</label>
                        <input type="radio" name="gRate" value="none" defaultChecked/>
                        <label>Fast</label>
                        <input type="radio" name="gRate" value="fastR"/>
                        <label>Medium</label>
                        <input type="radio" name="gRate" value="medR"/>
                        <label>Slow</label>
                        <input type="radio" name="gRate" value="slowR"/>
                    </form><br/><br/>
                    <button type="button" onClick={this.check}>Submit</button><br/><br/>
                    <p id="result"></p><br/>
                </div>
            </div>
        )
    }

    //check function for filter options
    check(){
        results ="";
        for(var i = 0; i<trees.length;i++ )
        {
            //a really bad if statment chunk to display filtered options can work through later
            if((document.getElementById('categoryF').category.value===trees[i].state.category||
            document.getElementById('categoryF').category.value==="none")&&
            (document.getElementById('soilConF').soilCon.value===(trees[i].state.soilCon)||
            document.getElementById('soilConF').soilCon.value==="none")&&
            (document.getElementById('sunConF').sunCon.value===trees[i].state.sunCon||
            document.getElementById('sunConF').sunCon.value==="none")&&
            (document.getElementById('maintenF').mainten.value===trees[i].state.mainten||
            document.getElementById('maintenF').mainten.value==="none")&&
            (document.getElementById('heightF').heightV.value===trees[i].state.heightV||
            document.getElementById('heightF').heightV.value==="none")&&
            (document.getElementById('growthF').gRate.value===trees[i].state.gRate||
            document.getElementById('growthF').gRate.value==="none"))
            {
                //make a long string holding search results
                console.log("hit");
                results+=trees[i].result_string() + "<br/>";
            }
        }
        if(results!=="")
        {
            //change result paragraph to show the list of trees
            document.getElementById('result').innerHTML="The Result was: <br/>"+results;
        }
        else
        {
            // this is within the for loop
            document.getElementById('result').innerHTML="The Results show nothing";
        }
    }

    //blank search function
    searchRes(){}
}