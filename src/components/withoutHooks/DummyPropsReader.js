import React from 'react'

const DummyPropsReader = ({ data, loading, error }) => (
  <div>
  {
    loading ? <div>Loading data...</div> :
      !error && data && data.results &&
      data.results.length > 0 && data.results.map(char =>
        <div key={char.name}>{char.name}</div>
      )
  }
  </div>
)

export default DummyPropsReader
