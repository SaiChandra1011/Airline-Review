import React from 'react'
import Header from '../components/Header'
import AddAirline from '../components/AddAirline'
import AirlineList from '../components/AirlineList'

const Home = () => {
  return (
    <div>
        <Header/> 
        <AddAirline/>
        <AirlineList/>
    </div>
  ) 
}

export default Home