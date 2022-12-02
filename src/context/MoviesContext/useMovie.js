import { useContext } from "react";
import MovieContext from './context';

const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovie must be used within a MoviesProvider');
  }
  return context;
}

export default useMovie;