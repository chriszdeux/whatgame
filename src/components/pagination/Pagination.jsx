import React from 'react'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
import { usePagination } from '../../hooks/usePagination'
import ReactPaginate from 'react-paginate'
import '../../styles/react-pagination.css'

export const Pagination = ({pagination}) => {
const { next, previous, handleNextPage, handlePreviousPage, currentPage } = pagination
// const { } = usePagination()
// debugger
  return (

    // <div className="commentBox">
    //     {/* <CommentList data={this.state.data} /> */}
    //     <ReactPaginate
    //       previousLabel={ 'previous' }
    //       nextLabel={ 'next' }
    //       breakLabel={'...'}
    //       breakClassName={'break-me'}
    //       pageCount={this.state.pageCount}
    //       marginPagesDisplayed={2}
    //       pageRangeDisplayed={5}
    //       onPageChange={ handleNextPage }
    //       containerClassName={'pagination'}
    //       activeClassName={'active'}
    //     />
    //   </div>
    <div className="pagination">
      <div className="pagination__list">
          <LeftArrow 
            className="left--arrow"
            // href="#genres"
            onClick={ () => {
              handlePreviousPage(previous)
            } }
          />
        <RightArrow 
          className="right--arrow"
          // href="#genres"
          onClick={ () => {
            handleNextPage(next)
          } }
          />
      </div>
          <div>
          <h2 className="page--position">{ currentPage }</h2>
          {/* <h2 className="page--position">{ currentPage + 1}</h2>
          <h2 className="page--position">{ currentPage + 2 }</h2>
          <h2 className="page--position">{ currentPage + 3 }</h2>
          <h2 className="page--position">{ currentPage + 4 }</h2>
          <h2 className="page--position">{ currentPage + 6 }</h2> */}
          </div>
        <p className="page">page</p>

    </div>
  )
}
