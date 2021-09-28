import { useEffect, useState } from 'react'

import { DataContext } from './context/DataContext'
import { Home } from './Home'
import api from './services/api'
import { GlobalStyle } from './styles/globalStyles'

export function App () {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const response =  await api.get('')
      setData(response.data.products)
    }
    getData()
  }, [])

  return (
    <DataContext.Provider value={data}>
      <Home/>
      <GlobalStyle/>
    </DataContext.Provider>
  )
} 