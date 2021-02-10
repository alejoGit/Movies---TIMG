import React from 'react';
import { Movie } from '../../interfaces';
import MovieListItem from './MovieListItem';

type Props = {
  movies: Movie[]
}
const Movies = ({ movies }: Props) => (
  <>
  <ul className="ul-movies">
    { movies.map((mv: Movie) =>(
      <MovieListItem  key={mv.id} movie={mv} />
    ))}
  </ul>

  <style jsx>{`
    .ul-movies{
      padding: 0;
      margin: 0;
      display:flex;
      flex-wrap: wrap;
    }
  `}</style>
  </>
)


export default Movies
