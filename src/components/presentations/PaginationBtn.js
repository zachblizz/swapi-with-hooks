import React from 'react'

const PaginationBtn = ({txt, url, pageTurn, way}) => (
  <button
    disabled={!url}
    onClick={pageTurn(url, way)}
  >
    {txt}
  </button>
)

export default PaginationBtn
