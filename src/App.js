import React, { useState } from 'react'
import { useCallApi } from './api'
import { DataContext } from './context'
import ShowData from './components/presentations/ShowData'
import './App.css'

const App = () => {
  const [url, setUrl] = useState('https://swapi.co/api/people/?page=1')
  const { data, loading, error } = useCallApi({ url, type: 'get' })
  const [page, setPage] = useState(1)

  const updateUrl = (newUrl, pageNum) => () => {
    setUrl(newUrl)
    // this works because it's a primative type (int)
    // otherwise we'd have to make a copy (state is immutable)
    setPage(page + pageNum)
  }

  return (
    <div className='App'>
      {
        <button
          disabled={!data.previous}
          onClick={updateUrl(data.previous, -1)}
        >prev</button>
      }
      <div
        style={{
          display: 'inline-block',
          margin: '20px 10px'
        }}
      >{ page }</div>
      {
        <button
          disabled={!data.next}
          onClick={updateUrl(data.next, 1)}
        >next</button>
      }
      <DataContext.Provider value={{
        data,
        loading,
        error
      }}>
        <ShowData />
      </DataContext.Provider>
    </div>
  )
}

export default App;
