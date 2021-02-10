import React from 'react';

type Props = {
  currentType: string
  handleChange: any
}
const MoviesFilter = ({ currentType, handleChange }: Props) => (
  <>
  <div className="filter__wrapper">
    <select className="filter__select" value={currentType} onChange={handleChange}>
      <option value="now_playing">Recientes</option>
      <option value="popular">Populares</option>
      <option value="top_rated">Mejor calificadas</option>
    </select>
  </div>

  <style jsx>{`
    .filter__wrapper{
      box-sizing: border-box;
      padding: 32px;
      padding-top:0;
    }
    .filter__select{
      font-size: 1.5em;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 8px 8px;
      outline:none;
    }
  `}</style>
  </>
)


export default MoviesFilter
