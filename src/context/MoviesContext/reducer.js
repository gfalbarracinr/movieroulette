import { addMovie, editMovie, removeMovie } from "./actions";
import { ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE } from "./actionTypes";

const moviesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return addMovie(state, action);
    }
    case REMOVE_MOVIE: {
      return removeMovie(state, action);
    }
    case EDIT_MOVIE: {
      return editMovie(state, action);
    }
    default:
      throw new TypeError('Not action type');
  }
}

export default moviesReducer;