import React from 'react';

type Props = {
  query: string
  setQuery: any
  handleSearch: any
}
const MoviesPaginator = ({ query, setQuery, handleSearch }: Props) => (
  <>
  <h1 className="title search__title">Buscar Película</h1>
  <div className="search__wrapper">
    <input className="search__input" value={query} type="text" onChange={event => setQuery(event.target.value)} />
    <button id="btnSearch" className="btn btn-search" onClick={ handleSearch }>Buscar</button> 
  </div>
  <style jsx>{`
    .search__title{
      text-align:center;
      margin-bottom:0;
    }
    .search__wrapper{
      box-sizing:border-box;
      padding: 32px;
      display: flex;
      justify-content:center;
    }
    .btn-search{
      border-radius: 0 16px 16px 0;
    }
    .search__input{
      border: 1px solid #6530dd;
      border-radius: 16px 0 0 16px;
      outline:none;
      box-sizing:border-box;
      padding: 4px 8px;
    }
  `}</style>
  </>
)


export default MoviesPaginator
