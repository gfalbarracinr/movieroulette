import React, { Component } from "react";
import "./filter.css"
import FilterType from "./FilterType";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(e){
        this.props.handleFilterChange(e.target.value);
    }
    render() { 
        return (
            <nav>
               <ol className="filter-options">
                <li onClick={this.handlerChange} className="filter" value={FilterType.ALL}>All</li> 
                <li onClick={this.handlerChange} className="filter" value={FilterType.DOCUMENTARY}>Documentary</li> 
                <li onClick={this.handlerChange} className="filter" value={FilterType.COMEDY}>Comedy</li> 
                <li onClick={this.handlerChange} className="filter" value={FilterType.HORROR}>Horror</li> 
                <li onClick={this.handlerChange} className="filter" value={FilterType.CRIME}>Crime</li> 

                <li className="filter order">
                    <label htmlFor="sort-by" className="order-label">Sort by</label>
                    <select id="sort-by">
                    <option>Release Date</option>

                    </select>
                </li>
               </ol>
                <hr className="filter-line"/>
            </nav>
        );
    }
}
 
export default Filter;