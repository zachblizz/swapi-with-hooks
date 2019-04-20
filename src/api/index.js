import { useState, useEffect } from 'react'

const getData = async ({
  url,
  setData,
  setError,
  setLoading
}) => {
  try {
    setLoading(true)
    const resp = await fetch(url)
    const jsonData = await resp.json()

    if (jsonData) {
      setData(jsonData)
    }
  } catch (err) {
    console.error(err)
    setError(err)
  } finally {
    setLoading(false)
  }
}

const useCallApi = ({url, type}) => {
  let [loading, setLoading] = useState(true)
  let [data, setData] = useState({})
  let [error, setError] = useState(null)

  useEffect(() => {
    if (type === 'get') {
      getData({
        url,
        setLoading,
        setData,
        setError
      })
    }
  }, [url])

  return {
    data,
    loading,
    error,
  }
}

export {
  getData,
  useCallApi
}