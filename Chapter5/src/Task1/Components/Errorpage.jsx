import React from 'react'
import ErrorImg from './images/errorpage.png'


const Errorpage = () => {
  return (
    <div className='error'>
      <h1>404 Error Not Found</h1>
      <img src={ErrorImg} alt="" />
    </div>
  )
}

export default Errorpage
