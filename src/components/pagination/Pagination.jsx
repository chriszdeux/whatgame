import React from 'react'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
import { usePagination } from '../../hooks/usePagination'

export const Pagination = ({pagination}) => {
const { next, previous, handleNextPage, handlePreviousPage, currentPage } = pagination
// const { } = usePagination()
  return (
    <div className="pagination">
      <div className="pagination__list">
          <LeftArrow 
            className="left--arrow"
            href="#game"
            onClick={ () => {
              handlePreviousPage(previous)
            } }
          />
        <RightArrow 
          className="right--arrow"
          href="#game"
          onClick={ () => {
            handleNextPage(next)
          } }
          />
      </div>
          <h2 className="page--position">{ currentPage }</h2>
        <p className="page">page</p>
    </div>
  )
}
