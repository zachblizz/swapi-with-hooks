import React, { Component } from 'react'
import { DataContext } from './context'

import Pagination from './components/presentations/Pagination'
import ShowDataNoContext from './components/withoutHooks/ShowDataNoContext'
import './App.css'

export default class AppNoHooks extends Component {
  state = {
    data: {},
    loading: true,
    error: undefined,
    url: 'https://swapi.co/api/people/?page=1'
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      this.setState({
        data: {},
        error: undefined,
        loading: true
      })
      const resp = await fetch(this.state.url)
      const jsonData = await resp.json()
  
      if (jsonData) {
        this.setState({
          data: jsonData,
          error: undefined,
          loading: false
        })
      }
    } catch (error) {
      console.error(error)
      this.setState({
        data: {},
        error,
        loading: false
      })
    }
  }

  setUrl = url => {
    this.setState({ url })
    this.getData()
  }

  render() {
    return (
      <div className='App'>
        <h2>No Hooks... Boo</h2>
        <DataContext.Provider value={{ ...this.state }}>
          <Pagination
            setUrl={ this.setUrl }
          />
          <ShowDataNoContext
            {...this.state}
          />
        </DataContext.Provider>
      </div>
    )
  }
}