import React, {useState, useEffect} from 'react'
import {Movie} from '../../interfaces'
import {addToFavorites, removeFromFavorites} from '../../localstorage';
import {findMovie} from '../../localstorage';

type Props = {
  movie: Movie,
}

const FavoriteButton = ({ movie }: Props) =>{ 
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect( ()=>{
    let isFav = findMovie(movie.id);
    if(isFav === undefined){
      setIsFavorite(false);
    }else{
      setIsFavorite(true);
    }
  });

  const add = (movie: Movie) => {
    addToFavorites(movie);
    setIsFavorite(true);
  };

  const remove = (movie: Movie) => {
    removeFromFavorites(movie);
    setIsFavorite(false);
  };
  
  return (
  <>
  { isFavorite ? 
    <button className="favorite__btn active" onClick={()=>{ remove(movie)}}>Quitar de favoritos ★</button>
  :
    <button className="favorite__btn" onClick={()=>{ add(movie) }}>Agregar a favoritos ☆</button>
  }
  <style jsx>{`
    .favorite__btn{
      background: none;
      box-sizing: border-box;
      padding: 8px 16px;
      border: 2px solid #3E98C7;
      color: #3E98C7;
      cursor:pointer;
      outline:none;
    }
    .active{
      background: #3E98C7;
      color:white;
    }
  `}</style>
  </>
)}

export default FavoriteButton
