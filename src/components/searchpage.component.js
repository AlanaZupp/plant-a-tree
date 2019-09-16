import React, {Component} from 'react';
import "./searchpage.css";

export default class SearchPage extends Component{
    render(){
        return(
            <div class="fullPage">
                <div class="searchBar">
                    <p>Find the tree(s) you're looking for...</p>
                    <div class="search">
                        <input type="text" placeholder="Search.."></input>
                    </div>
                </div>
                <div class="options">
                    <p>Category</p><br/>
                    <form>
                        <label>Fruit Tree</label>
                        <input type="radio" class="radio" name="category" value="fruit"/>
                        <label>Hedge</label>
                        <input type="radio" class="rad" name="category" value="hedge"/>
                        <label>Evergreen</label>
                        <input type="radio" class="rad" name="category" value="evergreen"/>
                        <label>Nz Native</label>
                        <input type="radio" class="rad" name="category" value="native"/>
                        <label>Gum Tree</label>
                        <input type="radio" class="rad" name="category" value="gum"/>
                        <label>Palm Tree</label>
                        <input type="radio" class="rad" name="category" value="palm"/>
                        <label>Hardwood</label>
                        <input type="radio" class="rad" name="category" value="hardwood"/>
                    </form><br/>
                    <p>Conditions</p><br/><br/>
                    <p class="subtitle">Soil Drainage</p>
                    <form>
                         
                        <label>Fast</label>
                        <input type="radio" class="rad" name="soilCon" value="fast"/>
                        <label>Med</label>
                        <input type="radio" class="rad" name="soilCon" value="medDrain"/>
                        <label>Slow</label>
                        <input type="radio" class="rad" name="soilCon" value="slow"/>
                        <label>Any</label>
                        <input type="radio" class="rad" name="soilCon" value="anyDrain"/>
                    </form>
                    <br/><p class="subtitle">Sunlight</p>
                    <form>
                        <label>Sunny</label>
                        <input type="radio" class="rad" name="sunCon" value="sunny"/>
                        <label>Medium</label>
                        <input type="radio" class="rad" name="sunCon" value="medSun"/>
                        <label>Shady</label>
                        <input type="radio" class="rad" name="sunCon" value="shade"/>
                        <label>Any</label>
                        <input type="radio" class="rad" name="sunCon" value="anySun"/>
                    </form><br/>
                    <p>Maintenance</p><br/>
                    <form>
                        <label>High</label>
                        <input type="radio" class="rad" name="mainten" value="highMain"/>
                        <label>Medium</label>
                        <input type="radio" class="rad" name="mainten" value="medMain"/>
                        <label>Low</label>
                        <input type="radio" class="rad" name="mainten" value="lowMain"/>
                    </form>
                    <p>Max Tree Height</p><br/><br/>
                    <p>Growth Rate</p><br/><br/>
                    <p>Price</p><br/><br/>
                </div>
            </div>
        )
    }
}