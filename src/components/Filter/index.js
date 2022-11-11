import React, { Component, Fragment } from "react";
import "./filter.css"
import FilterType, { capitalizeFirstLetter } from "./FilterType";

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
            <Fragment>
               <ol className="filter-options">
                {
                    Object.entries(FilterType).map(([key, value]) => (
                        <li onClick={this.handlerChange} key={value} className="filter" value={value}>{capitalizeFirstLetter(key)}</li> 
                ))
                }

                <li className="filter order">
                    <label htmlFor="sort-by" className="order-label">Sort by</label>
                    <select id="sort-by">
                    <option>Release Date</option>

                    </select>
                </li>
               </ol>
                <hr className="filter-line"/>
            </Fragment>
        );
    }
}

Filter.propTypes = {
    handleFilterChange: Function.isrequired
}
 
export default Filter;