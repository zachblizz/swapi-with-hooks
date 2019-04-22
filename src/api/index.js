import { useState, useEffect } from 'react'

const getData = async ({
  url,
  setDataInfo
}) => {
  try {
    setDataInfo({
      data: {},
      error: undefined,
      loading: true
    })
    const resp = await fetch(url)
    const jsonData = await resp.json()

    if (jsonData) {
      setDataInfo({
        data: jsonData,
        error: undefined,
        loading: false
      })
    }
  } catch (error) {
    console.error(error)
    setDataInfo({
      data: {},
      error,
      loading: false
    })
  }
}

const useCallApi = ({url, type}) => {
  let [dataInfo, setDataInfo] = useState({
    loading: false,
    data: {},
    error: undefined
  })

  // componentDidMount
  // second param tells the effect to run again once changed
  useEffect(() => {
    if (type === 'get') {
      getData({
        url,
        setDataInfo
      })
    }
  }, [url])

  return dataInfo
}

export {
  getData,
  useCallApi
}