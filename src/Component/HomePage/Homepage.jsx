import React from 'react'
import HomeAI from './HomeAI'
import HomeSubAI from './HomeSubAI'
import Register from '../../Auth/Register/Register'
import "./Homepage.css"
const Homepage = () => {
  return (
    <div className='home__divs'>
    <div className='home__grids'>
        <div className='home__div'>
            <HomeAI/>
            <HomeSubAI/>
            <div className='subtrate'> <img src='./img/subtract1.png'/></div>
        </div>
        <div className="form">
           <Register/>
        </div>
    </div>
    </div>
  )
}

export default Homepage