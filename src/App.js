import React, { useState } from 'react'
import { useCallApi } from './api'
import { DataContext } from './context'

import Pagination from './components/presentations/Pagination'
import ShowData from './components/presentations/ShowData'
import './App.css'

const App = () => {
  const [url, setUrl] = useState('https://swapi.co/api/people/?page=1')
  const { data, loading, error } = useCallApi({ url, type: 'get' })

  return (
    <div className='App'>
      <DataContext.Provider value={{
        data,
        loading,
        error
      }}>
        <Pagination
          setUrl={ setUrl }
        />
        <ShowData />
      </DataContext.Provider>
    </div>
  )
}

export default App;
