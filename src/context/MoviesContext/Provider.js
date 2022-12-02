import { useReducer } from "react";
import moviesReducer from "./reducer";
import MovieContext from './context';
import moviesMock from '../../assets/movies.json';

const MoviesProvider = ({children}) => {
 const [state, dispatch] = useReducer(moviesReducer, {movies: moviesMock.movies});
 const value ={state, dispatch}
 return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

export default MoviesProvider;