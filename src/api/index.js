import { useState, useEffect } from 'react'

const getData = async ({
  url,
  setState
}) => {
  try {
    setState({
      data: {},
      error: undefined,
      loading: true
    })
    const resp = await fetch(url)
    const jsonData = await resp.json()

    if (jsonData) {
      setState({
        data: jsonData,
        error: undefined,
        loading: false
      })
    }
  } catch (error) {
    console.error(error)
    setState({
      data: {},
      error,
      loading: false
    })
  }
}

const useCallApi = ({url, type}) => {
  let [state, setState] = useState({
    loading: true,
    data: {},
    error: undefined
  })

  useEffect(() => {
    if (type === 'get') {
      getData({
        url,
        setState
      })
    }
  }, [url])

  return { ...state }
}

export {
  getData,
  useCallApi
}