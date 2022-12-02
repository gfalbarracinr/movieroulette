import { useMemo, useState } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import FilterType from './components/Filter/FilterType';
import MovieCard from './components/MovieCard';
import './App.css';
import AddMovie from './components/AddMovie';
import useMovie from './context/MoviesContext/useMovie';
import { ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE } from './context/MoviesContext/actionTypes';

function App() {
  const {state, dispatch} = useMovie();
  const [filter, setFilter] = useState(FilterType.ALL);
  const [showMovie, setShowMovie] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    if (filter === FilterType.ALL) {
      return state.movies;
    }
    return  state.movies.filter(movie => parseInt(movie.genre) === filter);
  }, [state.movies, filter]);

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const handleSubmitMovie = (movie) => {
    dispatch({type: ADD_MOVIE, payload: movie});
  }

  const handleSubmitEdit = (movieEdit) => {
    dispatch({type: EDIT_MOVIE, payload: movieEdit});
  }
  const handleDelete = (key) => {
    dispatch({type: REMOVE_MOVIE, payload: key});
  }

  const handleEdit = (movie) => {
    setCurrentMovie(movie);
    setShowMovie(true);
  }
  const handleClose = () => {
    setShowMovie(false);
  }
  const img = 'https://dummyimage.com/322x455/000/fff';
  return (
    <div className="App">
      <Header handleSubmit={handleSubmitMovie} />
      {showMovie && <AddMovie handleClose={handleClose} handleSubmit={handleSubmitEdit} movie={currentMovie} />}
      <Filter handleFilterChange={handleFilterChange} />
      <p className='movies-count'>{`${filteredMovies.length} movies found`}</p>
      <main className='movies'>
        {
          filteredMovies.map(movie => <MovieCard handleEdit={() => handleEdit(movie)} handleDelete={() => handleDelete(movie.key)} key={movie.key} movie={movie} image={movie.image != null ? require(`./assets/images/movies/${movie.image}`) : img} />)
        }
      </main>
    </div>
  );
}

export default App;
