import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import { getMovies } from '../network/api';
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Movies from '../components/movies/Movies';
import MoviesFilter from '../components/movies/MoviesFilter';
import MoviesPaginator from '../components/movies/MoviesPaginator';

type Props = {
  data: any
}

const WithStaticProps = ({ data }: Props) => { 
  const [movies, setMovies] = useState(data.results);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentType, setCurrentType] = useState('now_playing');
  const [firstLoad, setFirstLoad] = useState(true);
  const [pagination, setPagination] = useState({
    totalResults: data.total_results,
    totalPages: data.total_pages,
  });
  
  useEffect(()=>{
    const loadMore = async () => {
      const res = await getMovies(currentType, currentPage);
      setMovies([...movies, ...res.results]);
    };
    if(currentPage > 1){
      loadMore();
    }
  },[currentPage]);

  useEffect(()=>{
    const load = async () => {
      const res = await getMovies(currentType, 1);
      setMovies(res.results);
      setCurrentPage(1);
      setPagination({
        totalResults: res.total_results,
        totalPages: res.total_pages,
      });
    };
    if(!firstLoad){
      load();
    }

  },[currentType]);

  const handleChange = (event: any) => {
    setFirstLoad(false);
    setCurrentType(event.target.value);
  };

  const handleLoadMore = async () => {
    setCurrentPage( currentPage + 1);
  };

  return(
    <>
      <Layout>
        <Head>
          <title>Peliculas TIMG - Home</title>
          <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis mauris neque. Proin sit amet tortor est. Morbi molestie consequat dui, quis molestie eros malesuada nec."/>
          <meta property="og:url"                content="http://localhost:3000" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Movies TIMG" />
          <meta property="og:description"        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <meta property="og:image"              content="https://www.timg.cl/wp-content/uploads/2017/09/LOGO-TIMG-LANDING.png" />
        </Head> 
        <h1 className="title">Bienvenidos a Movies TIMG</h1>
        <MoviesFilter currentType={currentType} handleChange={handleChange}  />
        <Movies movies={movies} />
        <MoviesPaginator pagination={pagination} currentPage={currentPage} handleLoadMore={handleLoadMore} />
      </Layout>
    </>
)}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMovies('now_playing');
  return { props: { data } }
}

export default WithStaticProps
