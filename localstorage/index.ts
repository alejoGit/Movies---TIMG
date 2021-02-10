import {Movie} from '../interfaces';

export const getLocalStorageFavorites = () : Movie[] => {
  let arrFavorites = localStorage.getItem('favorites');
  if( !arrFavorites ) {
    return [];
  } else{
    return JSON.parse(arrFavorites);
  }
};
export const findMovie = (id : number)  => {
  let favorites =  getLocalStorageFavorites();
  return favorites.find( (m) => m.id === id );
};
export const addToFavorites = (movie: Movie) => {
  let favorites = getLocalStorageFavorites();
  if(favorites){
    let movieAux = findMovie(movie.id);
    if(movieAux){
      alert('Ya está en favoritos');
    }else{
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Se agegó la película a tus favortios');
    }
  }
}

export const removeFromFavorites = (movie: Movie) => {
  let favorites = getLocalStorageFavorites();
  if(favorites){
    let newFavorites = favorites.filter( (f) => f.id !== movie.id)
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    alert('Se eliminó la película de tus favortios');  
  }
}