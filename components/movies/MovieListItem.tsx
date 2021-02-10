import React from 'react'
import Link from 'next/link'

import { Movie } from '../../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
  movie: Movie
}
const MovieListItem = ({ movie }: Props) => (
  <>
  <li className="movie__li">
    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
      <a id={`movie-${movie.id}`}>
        <div>
          <LazyLoadImage
            alt={movie.title}
            effect="blur"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} // use normal <img> attributes as props
            width="100%" />
          <div className="movie__rating">
            <CircularProgressbar
              value={movie.vote_average * 10}
              text={`${movie.vote_average *10}%`}/>
          </div>
          <div className="movie__info">
            <h2 className="movie__title">{movie.title}</h2>
            <div className="movie__date">{movie.release_date}</div>
          </div>
        </div> 
      </a>
    </Link>
  </li>

  <style jsx>{`
    .movie__li{
      list-style: none;
      width: calc(20% - 8px);
      margin: 4px;
      box-shadow: 0 0 4px #444;
      border-radius: 8px 8px 0 0;
      font-family: 'Helvetica neue';
      position:relative
    }
    .movie__li a{
      text-decoration: none;
      color: #333;
    }
    .movie__img{
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
    .movie__info{
      box-sizing: border-box;
      padding: 8px 16px;
    }
    .movie__info h2{
      margin: 4px 0;
      font-size:1.1em;
    }
    .movie__rating{
      width: 40px;
      position:absolute;
      bottom: 8px;
      right: 8px;
    }
    @media screen and (max-width: 760px){
      .movie__li{
        list-style: none;
        width: calc(50% - 8px);
      }
    }
  `}</style>
  </>
)


export default MovieListItem
