import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { searchMovies } from '../../network/api';
import Movies from '../../components/movies/Movies';
import MoviesPaginator from '../../components/movies/MoviesPaginator';
import MoviesSearch from '../../components/movies/MoviesSearch';
import Head from 'next/head';
import {useEffect, useState} from 'react';

type Props = {
  data: any
}

const WithStaticProps = ({ data }: Props) => { 
  const [movies, setMovies] = useState(data.results);
  const [query, setQuery] = useState('');
 
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalResults: data.total_results,
    totalPages: data.total_pages,
  });

  useEffect(()=>{
    const loadMore = async () => {
      const res = await searchMovies(query, currentPage);
      setMovies([...movies, ...res.results]);
    };
    if(currentPage > 1){
      loadMore();
    }
  },[currentPage]);
  
  const handleLoadMore = async () => {
    setCurrentPage( currentPage + 1);
  };

  const handleSearch = async () => {
    const res = await searchMovies(query);
    setMovies(res.results);
    setPagination({
      totalResults: res.total_results,
      totalPages: res.total_pages,
    });
  };
  
  return(
  <>
    <Layout>
      <Head>
        <title>Peliculas TIMG - Buscar Película</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, html adipiscing elit. asset quis mauris neque. movies sit amet tortor est. Morbi molestie consequat dui, quis molestie eros malesuada nec."/>
          <meta property="og:url"                content="http://localhost:3000/search" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Movies TIMG" />
          <meta property="og:description"        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <meta property="og:image"              content="https://www.timg.cl/wp-content/uploads/2017/09/LOGO-TIMG-LANDING.png" />
      </Head> 
      <MoviesSearch query={query} setQuery={setQuery} handleSearch={handleSearch} />
      { movies && <Movies movies={movies}/>}
      <MoviesPaginator pagination={pagination} currentPage={currentPage} handleLoadMore={handleLoadMore} />
    </Layout>
  </>
)}

export const getStaticProps: GetStaticProps = async () => {
  const data = await searchMovies('');
  return { props: { data} }
}

export default WithStaticProps
