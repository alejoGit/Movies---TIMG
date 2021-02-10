import { GetStaticProps, GetStaticPaths } from 'next'

import { Movie } from '../../interfaces';
import { getMovie, getMovies } from '../../network/api';
import MovieDetail from '../../components/movies/MovieDetail';
import Layout from '../../components/Layout';
import Head from 'next/head';

type Props = {
  errors?: string
  movie?: Movie
}

const StaticPropsDetail = ({ errors, movie  }: Props) => {

  const makeSchema = () => {
    return {
        // schema truncated for brevity
        '@context': 'http://schema.org',
        '@type': 'Movie',
        name: movie && movie.title,
        description: movie && movie.overview
    }
}

  if (errors) {
    return (
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    )
  }

  return (
    <>
    <Layout>
      <Head>
        <title>{ movie && movie.title } - Peliculas TIMG</title>
        <meta name="description" content={ movie && movie.overview }/>
        <meta property="og:url"                content="http://localhost:3000" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Movies TIMG" />
        <meta property="og:description"        content={ movie && movie.overview } />
        <meta property="og:image"              content={ movie && `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` } />
    </Head> 
      { movie &&
        <div>
        <MovieDetail movie={movie} />
        </div>
      }
      </Layout>
      {/* <script type="application/ld+json" >{`
        {
          "@context":"https://schema.org/",
          "@type":"Movie",
          "name":"${movie && movie.title}",
          "description": "${movie && movie.overview}",
        }
        `}</script> */}

        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeSchema()) }}
        />
    </>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await getMovies();
  const paths = movies.results.map((mv: Movie) => ({
    params: { id: mv.id.toString() },
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const movie = await getMovie(id);
    return { props: { movie } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
