import React from 'react'

import { Movie } from '../../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FavoriteButton from '../../components/buttons/FavoriteButton';
type Props = {
  movie: Movie,
}
const MovieDetail = ({ movie }: Props) => (
  <>
  <li className="movie__wrapper">
    <div>
      <LazyLoadImage
        alt={movie.title}
        effect="blur"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        width="100%" />
      <div className="movie__info">
        <div className="movie__info-header">
          <div>
            <h1>{movie.title}</h1>
            <div>{movie.release_date}</div>
          </div>
          <div className="movie__rating">
            <CircularProgressbar
              value={movie.vote_average * 10}
              text={`${movie.vote_average *10}%`}/>
          </div>
        </div>
        <p className="movie__desc">{movie.overview}</p>
        <div className="movie__favorite">
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div> 
  </li>

  <style jsx>{`
    .movie__wrapper{
      list-style: none;
      width: 760px;
      max-width: 100%;
      margin: 0 auto;
      box-shadow: 0 0 12px #444;
      font-family: 'Helvetica neue';
      position:relative;
      background: white;
    }
    .movie__info-header{
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    .movie__img{
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
    .movie__info{
      box-sizing: border-box;
      padding: 8px 16px;
    }
    .movie__rating{
      width: 60px;
    }
    .movie__desc{
      color: #666;
      font-weight: 300;
      letter-spacing: 1px
    }
    .movie__favorite{
      display: flex;
      justify-content:flex-end;
      margin-bottom: 16px;
    }
  `}</style>
  </>
)


export default MovieDetail
