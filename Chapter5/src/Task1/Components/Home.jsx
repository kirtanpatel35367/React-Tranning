import React from 'react'
import home from './images/home.png'
import { useNavigate } from 'react-router-dom'
import UserLogin from './userLogin'
import { useUser } from '../../context/UserContext'

const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useUser()
  if (isAuthenticated) {
    return (
      <div className='home'>
        <img src={home} alt="" />
      </div>
    );
  }
  else {
    return <UserLogin />
  }
}

export default Home
