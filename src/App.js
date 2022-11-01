import { useMemo, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import FilterType from './components/Filter/FilterType';
const moviesMock = [
  {name: "Avatar", genre: FilterType.HORROR},
  {name: "Titanic", genre: FilterType.CRIME},
  {name: "Star wars", genre: FilterType.DOCUMENTARY},
  {name: "Pinochio", genre: FilterType.COMEDY},
  {name: "Maverick", genre: FilterType.CRIME},
  {name: "Spiderman", genre: FilterType.DOCUMENTARY},
  {name: "Avengers", genre: FilterType.HORROR},
  {name: "Hulk", genre: FilterType.CRIME},
  {name: "Monsters Inc", genre: FilterType.COMEDY},

]
function App() {
  // eslint-disable-next-line 
  const [movies, setMovies] = useState(moviesMock);
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
      <main className='movies'>
      {
        filteredMovies.map(movie => <p key={movie.name}> {movie.name}</p>)
      }
      </main>
    </div>
  );
}

export default App;
