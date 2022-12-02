export const addMovie = (state, action) => {
  return {
   movies: [...state.movies, action.payload]
  }
}

export const removeMovie = (state, action) => {
  return {
   movies: state.movies.filter((movie) => action.payload !== movie.key)
  }
}

export const editMovie = (state, action) => {
  return {
    movies: state.movies.map((movie) => {
      if (movie.key === action.payload.key) {
        return action.payload;
      }
      return movie;
    })
  }
}