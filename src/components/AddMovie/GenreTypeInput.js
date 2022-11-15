import React, { Fragment } from 'react';
import { getMovieFilters, resolveFilterName } from '../Filter/FilterType';
import './addMovie.css';

const GenreTypeInput = () => {
  return (
    <Fragment>
      <label for="genre">Genre</label>
      <select name="genre" className='addMovie-input' id="genre" form="addmovie">
      {
        getMovieFilters().map((genre) => <option key={genre} value={genre}>{resolveFilterName(genre)}</option>)
      }
      </select>
    </Fragment>
  );
}

export default GenreTypeInput;