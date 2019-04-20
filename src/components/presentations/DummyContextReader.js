import React, { useContext } from "react"
import { DataContext } from '../../context'

const DummyContextReader = () => {
  const { data, loading, error } = useContext(DataContext)
  
  return (
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
}

export default DummyContextReader
