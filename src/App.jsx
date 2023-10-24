import React from 'react'
import {DataProvider} from './context/Context'
import Home from './Home'
const App = () => {
  return (
    <DataProvider>
      <Home />
    
    </DataProvider>
  )
}

export default App
