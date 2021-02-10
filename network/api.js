const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9ea65b9a49070e43cc93b87c1b508a70';

async function sendRequest (query) {
  let data = null;
  try {
    const res = await fetch(query);
    data = await res.json();
  } catch (error) {
    console.log(error.message);
  }
  return data;
} 

export async function getMovies(type = 'now_playing', page = 1) {
  return sendRequest(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&page=${page}`);
}

export async function searchMovies(query, page = 1) {
  return sendRequest(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=${page}`);
}

export async function getMovie(id) {
  return sendRequest(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}