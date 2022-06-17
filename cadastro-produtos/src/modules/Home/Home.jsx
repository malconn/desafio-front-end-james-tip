import React from 'react'
import Navbar from '../../utils/Navbar/Navbar';
import { AppContext } from '../../utils/Contexts/AppContext';
import Card from '../../utils/Card/Card';
const Home = () => {
  const [data,setData] = React.useContext(AppContext)

  return (
      <div>
        <Navbar />
        <h1>Home</h1>
        <Card data={data} />
      </div>    
  )
}

export default Home