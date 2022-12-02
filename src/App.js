import { useMemo, useState } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import FilterType from './components/Filter/FilterType';
import MovieCard from './components/MovieCard';
import moviesMock from './assets/movies.json';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  // eslint-disable-next-line 
  const [movies, setMovies] = useState(moviesMock.movies);
  const [filter, setFilter] = useState(FilterType.ALL);
  const [showMovie, setShowMovie] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    if (filter === FilterType.ALL) {
      return movies;
    }
    return movies.filter(movie => parseInt(movie.genre) === filter);
  }, [movies, filter]);

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const handleSubmitMovie = (movie) => {
    setMovies(prevState => ([...prevState, movie]))
  }

  const handleSubmitEdit = (movieEdit) => {
    console.log(movieEdit);
    setMovies(prevState => prevState.map((movie) => {
      if (movie.key === movieEdit.key) {
        return movieEdit;
      }
      return movie;
    }))
  }
  const handleDelete = (title) => {
    setMovies((prevState) => prevState.filter((movie) => movie.title !== title));
  }

  const handleEdit = (movie) => {
    setCurrentMovie(movie);
    setShowMovie(true);
  }
  const handleClose = () => {
    setShowMovie(false);
  }
  const img = 'https://dummyimage.com/322x455/000/fff';
  console.log(filteredMovies);
  return (
    <div className="App">
      <Header handleSubmit={handleSubmitMovie} />
      {showMovie && <AddMovie handleClose={handleClose} handleSubmit={handleSubmitEdit} movie={currentMovie} />}
      <Filter handleFilterChange={handleFilterChange} />
      <p className='movies-count'>{`${filteredMovies.length} movies found`}</p>
      <main className='movies'>
        {
          filteredMovies.map(movie => <MovieCard handleEdit={() => handleEdit(movie)} handleDelete={() => handleDelete(movie.title)} key={movie.key} movie={movie} image={movie.image != null ? require(`./assets/images/movies/${movie.image}`) : img} />)
        }
      </main>
    </div>
  );
}

export default App;
