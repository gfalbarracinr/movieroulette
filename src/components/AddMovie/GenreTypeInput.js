import React, { Fragment } from 'react';
import FilterType, { getMovieFilters, resolveFilterName } from '../Filter/FilterType';

const GenreTypeInput = () => {
  console.log(Object.keys(FilterType))
  return (
    <Fragment>
      <label for="genre">Genre</label>
      <select name="genre" id="genre" form="addmovie">
      {
        getMovieFilters().map((genre) => <option value={genre}>{resolveFilterName(genre)}</option>)
      }
      </select>
    </Fragment>
  );
}

export default GenreTypeInput;