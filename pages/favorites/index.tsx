import { GetStaticProps } from 'next'

import Layout from '../../components/Layout'
import { getLocalStorageFavorites } from '../../localstorage';
import {useState, useEffect} from 'react';
import Head from 'next/head'
import MovieListItem from '../../components/movies/MovieListItem';
import {Movie} from '../../interfaces';

const Favorites = () => { 
  const [movies, setMovies] =  useState <Movie[]> ([]);
  
  useEffect(()=>{
    const favorites= getLocalStorageFavorites();
    setMovies(favorites);
  },[]);
  
  return(
    <>
      <Layout>
        <Head>
          <title>Peliculas TIMG - Favoritos</title>
          <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis mauris neque. Proin sit amet tortor est. Morbi molestie consequat dui, quis molestie eros malesuada nec."/>
          <meta property="og:url"                content="http://localhost:3000/favorites" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Movies TIMG" />
          <meta property="og:description"        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <meta property="og:image"              content="https://www.timg.cl/wp-content/uploads/2017/09/LOGO-TIMG-LANDING.png" />
        </Head>  
        <h1 className="title">Favoritos</h1>
        <ul className="ul-movies">
          { movies.map((mv: any) =>(
            <MovieListItem  key={mv.id} movie={mv} />
          ))}
        </ul>
      </Layout>
      <style jsx>{`
        .ul-movies{
          padding: 0;
          margin: 0;
          display:flex;
          flex-wrap: wrap;
        }
        .filter__select{
          font-size: 1.5em;
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: 8px 8px;
        }
      `}</style>
    </>
)}

export default Favorites
