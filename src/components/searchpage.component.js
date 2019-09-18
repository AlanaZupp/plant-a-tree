import React, {Component} from 'react';
import SearchBox from "./SearchBox.component";
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
                    <div className="search">
                        <SearchBox searchRes={this.searchRes}/>
                    </div>
                </div>
                <div className="options">
                    <select class="custom-select custom-select-sm">
                        <option selected>Category</option>
                        <option value="fruit">Fruit Tree</option>
                        <option value="hedge">Hedge</option>
                        <option value="evergreen">Evergreen</option>
                        <option value="native">NZ Native</option>
                        <option value="gum">Gum Tree</option>
                        <option value="palm">Palm Tree</option>
                        <option value="hardwood">Hardwood</option>
                    </select>
                    <br/><br/>
                    <select class="custom-select custom-select-sm">
                        <option selected>Soil Drainage</option>
                        <option value="fast">Fast</option>
                        <option value="medium">Medium</option>
                        <option value="slow">Slow</option>
                    </select>
                    <br/><br/>
                    <select class="custom-select custom-select-sm">
                        <option selected>Sun Options</option>
                        <option value="fruit">Sunny</option>
                        <option value="hedge">Medium</option>
                        <option value="evergreen">Shady</option>
                    </select>
                    <br/><br/>
                    <select class="custom-select custom-select-sm">
                        <option selected>Maintenance</option>
                        <option value="fruit">High</option>
                        <option value="hedge">Medium</option>
                        <option value="evergreen">Low</option>
                    </select>
                    <br/><br/>
                    <select class="custom-select custom-select-sm">
                        <option selected>Height</option>
                        <option value="fruit">Less than 1M</option>
                        <option value="hedge">1-2M</option>
                        <option value="evergreen">2-3M</option>
                        <option value="">Greater than 3M</option>
                    </select>
                    <br/><br/>
                    <select class="custom-select custom-select-sm">
                        <option selected>Growth Rate</option>
                        <option value="fruit">Fast</option>
                        <option value="hedge">Medium</option>
                        <option value="evergreen">Slow</option>
                    </select>
                   <br/><br/>
                    <button type="button" id="subButt" onClick={this.check}>Submit</button><br/><br/>
                    <p id="result"></p><br/>
                </div>
            </div>
        )
    }

    // //check function for filter options
    // check(){
    //     results ="";
    //     for(var i = 0; i<trees.length;i++ )
    //     {
    //         //a really bad if statment chunk to display filtered options can work through later
    //         if((document.getElementById('categoryF').category.value===trees[i].category||
    //         document.getElementById('categoryF').category.value==="none")&&
    //         (document.getElementById('soilConF').soilCon.value===(trees[i].soilCon)||
    //         document.getElementById('soilConF').soilCon.value==="none")&&
    //         (document.getElementById('sunConF').sunCon.value===trees[i].sunCon||
    //         document.getElementById('sunConF').sunCon.value==="none")&&
    //         (document.getElementById('maintenF').mainten.value===trees[i].mainten||
    //         document.getElementById('maintenF').mainten.value==="none")&&
    //         (document.getElementById('heightF').heightV.value===trees[i].heightV||
    //         document.getElementById('heightF').heightV.value==="none")&&
    //         (document.getElementById('growthF').gRate.value===trees[i].gRate||
    //         document.getElementById('growthF').gRate.value==="none"))
    //         {
    //             //make a long string holding search results
    //             console.log("hit");
    //             results+=trees[i].name+" <img src='"+trees[i].pic+"'/><br/>";
    //         }
    //     }
    //     if(results!=="")
    //     {
    //         //change result paragraph to show the list of trees
    //         document.getElementById('result').innerHTML="The Result was: "+results;
    //     }
    //     else
    //     {
    //         // this is within the for loop
    //         document.getElementById('result').innerHTML="The Results show nothing";
    //     }
    // }

    searchRes(value) {
        results = "";

        for (var i = 0; i<trees.length; i++) {
            if (trees[i].state.name.toLowerCase().includes(value.toLowerCase()) || trees[i].state.category.toLowerCase().includes(value.toLowerCase()))
            {
                results += trees[i].result_string();
                if (i < trees.length + 1)
                {
                    results += "<br/>";
                }
            }
        }

        if(results!=="") {
            //change result paragraph to show the list of trees
            document.getElementById('result').innerHTML="The Result was: <br/>"+results;
        }
        else {
            // this is within the for loop
            document.getElementById('result').innerHTML="The Results show nothing";
        }
    }
}