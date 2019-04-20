import React, { useState } from 'react'
import { useCallApi } from './api'
import { DataContext } from './context'
import ShowData from './components/presentations/ShowData'
import './App.css'

const App = () => {
  const [url, setUrl] = useState('https://swapi.co/api/people/?page=1')
  const { data, loading, error } = useCallApi({ url, type: 'get' })
  const [page, setPage] = useState(1)

  const updateUrl = (newUrl, isNext) => () => {
    setUrl(newUrl)
    if (!isNext) {
      setPage(page - 1)
    } else {
      setPage(page + 1)
    }
  }

  return (
    <div className='App'>
      {
        data.previous && <button 
          onClick={updateUrl(data.previous)}
        >prev</button>
      }
      {
        data.next && <button 
          onClick={updateUrl(data.next, true)}
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
