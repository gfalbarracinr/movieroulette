import React, { PureComponent } from "react";
import './search.css';

class Search extends PureComponent {
    state = {  } 
    render() { 
        return (
            <form>
                <label className="search-title"><h1>FIND YOUR MOVIE</h1></label>
                <section className="search">
                <input
                  className="search-input"
                  type="text" 
                  name="movieSearch" 
                  required
                  placeholder="What do you want to watch ? "
                />
                <button type="submit" className="search-submit">Search</button>
                </section>
            </form>
        );
    }
}
 
export default Search;