import React, { useState } from 'react'
import { useCallApi } from './api'
import { DataContext } from './context'

import Pagination from './components/presentations/Pagination'
import ShowData from './components/withHooks/ShowData'
import './App.css'

const App = () => {
  const [url, setUrl] = useState('https://swapi.co/api/people/?page=1')
  const data = useCallApi({ url, type: 'get' })

  return (
    <div className='App'>
      <h3>Hooks! Yay!</h3>
      <DataContext.Provider value={{ ...data }}>
        <Pagination setUrl={ setUrl } />
        <ShowData />
      </DataContext.Provider>
    </div>
  )
}

export default App
