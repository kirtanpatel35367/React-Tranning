import React from 'react'
import { Outlet } from 'react-router-dom'
import aboutus from './images/aboutus.png'


const Aboutus = () => {
  return (
    <div className='about'>
      <img src={aboutus} alt="" />
      <Outlet/>
    </div>
  )
}

export default Aboutus
