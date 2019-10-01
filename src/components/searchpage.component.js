import React, {Component} from 'react';

import SearchBox from "./SearchBox.component";

//array of json tree objects
import {trees} from "./tree.js";
var results, count, resultsSec;

// class that creates and holds the form for filtering between tree types upon search
// will return list of tree objects that meet the users criteria.
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
                    <select className="custom-select custom-select-sm bg-light" id="sCategory">
                        <option defaultValue value="none">Category</option>
                        <option value="fruit">Fruit Tree</option>
                        <option value="hedge">Hedge</option>
                        <option value="evergreen">Evergreen</option>
                        <option value="native">NZ Native</option>
                        <option value="gum">Gum Tree</option>
                        <option value="palm">Palm Tree</option>
                        <option value="hardwood">Hardwood</option>
                    </select>
                    <br/><br/>
                    <select className="custom-select custom-select-sm bg-light" id="sSoil">
                        <option defaultValue value="none">Soil Drainage</option>
                        <option value="fast">Fast</option>
                        <option value="med">Medium</option>
                        <option value="slow">Slow</option>
                    </select>
                    <br/><br/>
                    <select className="custom-select custom-select-sm bg-light" id="sSun">
                        <option defaultValue value="none">Sun Options</option>
                        <option value="sunny">Sunny</option>
                        <option value="med">Medium</option>
                        <option value="shade">Shady</option>
                    </select>
                    <br/><br/>
                    <select className="custom-select custom-select-sm bg-light" id="sMain">
                        <option defaultValue value="none">Maintenance</option>
                        <option value="high">High</option>
                        <option value="med">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <br/><br/>
                    <select className="custom-select custom-select-sm bg-light" id="sHeight">
                        <option defaultValue value="none">Height</option>
                        <option value="<1">Less than 1M</option>
                        <option value="1-2">1-2M</option>
                        <option value="2-3">2-3M</option>
                        <option value=">3">Greater than 3M</option>
                    </select>
                    <br/><br/>
                    <select className="custom-select custom-select-sm bg-light" id="sGrow">
                        <option defaultValue value="none">Growth Rate</option>
                        <option value="fast">Fast</option>
                        <option value="med">Medium</option>
                        <option value="slow">Slow</option>
                    </select>
                   <br/><br/>
                    <button type="button" id="subButt" onClick={this.check}>Submit</button><br/><br/>
                </div>
                <div className="resultChunk">
                    <div className="result" id="result">
                    </div>
                    <div className="resultSec" id="resultSec">
                    </div>
                </div>
            </div>
        )
    }

    //check function for filter options
    check(){
        results ="";
        resultsSec="";
        count=0;
        for(var i = 0; i<trees.length;i++ )
        {
            if((trees[i].state.category===document.getElementById("sCategory").value||
            document.getElementById("sCategory").value==="none")&&
            
            (trees[i].state.soilCon===document.getElementById("sSoil").value||
            document.getElementById("sSoil").value==="none")&&
            
            (trees[i].state.sunCon===document.getElementById("sSun").value||
            document.getElementById("sSun").value==="none")&&
            
            (trees[i].state.mainten===document.getElementById("sMain").value||
            document.getElementById("sMain").value==="none")&&
            
            (trees[i].state.heightV===document.getElementById("sHeight").value||
            document.getElementById("sHeight").value==="none")&&
            
            (trees[i].state.gRate===document.getElementById("sGrow").value||
            document.getElementById("sGrow").value==="none"))
            {
                count++;
                if(count%2===1)
                {
                    results += trees[i].result_string();
                    if (i < trees.length + 1)
                    {
                        results += "<br/>";
                    }
                }
                else{
                    resultsSec += trees[i].result_string();
                    if (i < trees.length + 1)
                    {
                        resultsSec += "<br/>";
                    }
                }
            }
        }
        if(results!=="")
        {
            //change result paragraph to show the list of trees
            document.getElementById('result').innerHTML="<br/>"+results;
            if(resultsSec!=="")
            {
                document.getElementById('resultSec').innerHTML="<br/>"+resultsSec; 
            }
            else
            {
                document.getElementById('resultSec').innerHTML=""; 
            }
        }
        else
        {
            // this is within the for loop
            document.getElementById('result').innerHTML="The Results show nothing";
            document.getElementById('resultSec').innerHTML=""; 
        }
    }

    searchRes(value) {
        results ="";
        resultsSec="";
        count=0;
        for (var i = 0; i<trees.length; i++) {
            if (trees[i].state.name.toLowerCase().includes(value.toLowerCase()) || trees[i].state.category.toLowerCase().includes(value.toLowerCase()))
            {
                count++;
                if(count%2===1)
                {
                    results += trees[i].result_string();
                    if (i < trees.length + 1)
                    {
                        results += "<br/>";
                    }
                }
                else{
                    resultsSec += trees[i].result_string();
                    if (i < trees.length + 1)
                    {
                        resultsSec += "<br/>";
                    }
                }
            }
        }

        if(results!=="")
        {
            //change result paragraph to show the list of trees
            document.getElementById('result').innerHTML="<br/>"+results;
            if(resultsSec!=="")
            {
                document.getElementById('resultSec').innerHTML="<br/>"+resultsSec; 
            }
            else
            {
                document.getElementById('resultSec').innerHTML=""; 
            }
        }
        else
        {
            // this is within the for loop
            document.getElementById('result').innerHTML="The Results show nothing";
            document.getElementById('resultSec').innerHTML=""; 
        }
    }
}