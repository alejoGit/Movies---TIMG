import React from 'react';

type Props = {
  pagination: any
  currentPage: number
  handleLoadMore: any
}
const MoviesPaginator = ({ pagination, currentPage, handleLoadMore }: Props) => (
  <>
  { (currentPage < pagination.totalPages) &&
    <div className="paginator__button-wrapper">
     <button id="btnLoadMore" className="btn" onClick={handleLoadMore} >Cargar más</button>
   </div>
  }
 

  <div className="paginator__info">
    <div className="paginator__info-item">
      <b>Total resultados:</b> {pagination.totalResults}
    </div>
    <div className="paginator__info-item">
      <b>Total paginas:</b> {pagination.totalPages}
    </div>
    <div className="paginator__info-item">
      <b>Página actual:</b> <span id="currentPage">{currentPage}</span>
    </div>
  </div>

  <style jsx>{`
    .paginator__info{
      display: flex;
      justify-content: center;
      text-align:center;
    }
    .paginator__info-item{
      margin: 16px;
    }
    .paginator__info-item b{
      color: #6530dd;
    }
    .paginator__button-wrapper{
      text-align:center;
      box-sizing:border-box;
      padding-top: 16px;
    }
  `}</style>
  </>
)


export default MoviesPaginator
