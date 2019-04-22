import React, { useState, useContext } from 'react'
import PaginationBtn from './PaginationBtn'
import {  DataContext } from '../../context'

const Pagination = ({ setUrl }) => {
  const [page, setPage] = useState(1)
  const { data } = useContext(DataContext)

  const updateUrl = (newUrl, pageNum) => () => {
    setUrl(newUrl)
    // this works because it's a primative type (int)
    // otherwise we'd have to make a copy (state is immutable)
    setPage(page + pageNum)
  }

  return (
    <>
      {
        <PaginationBtn
          txt='prev'
          url={data.previous}
          pageTurn={updateUrl}
          way={-1}
        />
      }
      <div
        style={{
          display: 'inline-block',
          margin: '20px 10px'
        }}
      >{ page }</div>
      {
        <PaginationBtn
          txt='next'
          url={data.next}
          pageTurn={updateUrl}
          way={1}
        />
      }
    </>
  )
}

export default Pagination
