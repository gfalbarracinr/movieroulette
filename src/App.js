import { useMemo, useState } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import FilterType from './components/Filter/FilterType';
import MovieCard from './components/MovieCard';
import moviesMock from './assets/movies.json';
import './App.css';

function App() {
  // eslint-disable-next-line 
  const [movies, setMovies] = useState(moviesMock.movies);
  const [filter, setFilter] = useState(FilterType.ALL);

  const filteredMovies = useMemo(() => {
    if (filter === FilterType.ALL) {
      return movies;
    }
    return movies.filter(movie => movie.genre === filter);
  }, [movies, filter]);

  const handleFilterChange = (value) => {
    setFilter(value)
  }
  return (
    <div className="App">
      <Header/>
      <Filter handleFilterChange={handleFilterChange}/>
      <p className='movies-count'>{`${filteredMovies.length} movies found`}</p>
      <main className='movies'>
      {
        filteredMovies.map(movie => <MovieCard key={movie.name} movie={movie} image={require(`./assets/images/movies/${movie.image}`)}/>)
      }
      </main>
    </div>
  );
}

export default App;
