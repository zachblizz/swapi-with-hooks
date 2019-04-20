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
        data.previous && <button 
          onClick={updateUrl(data.previous, -1)}
        >prev</button>
      }
      {
        data.next && <button 
          onClick={updateUrl(data.next, 1)}
        >next</button>
      }
      <div>{ page }</div>
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
