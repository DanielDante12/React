import React,{useContext} from 'react'
import DataContext from './context/Context'
const Home = () => {
    let {name} = useContext(DataContext)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Home
