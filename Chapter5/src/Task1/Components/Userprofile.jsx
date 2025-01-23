import React, { useEffect } from 'react'
import User from './images/userprofile.png'
import { useUser } from '../../context/UserContext'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Userprofile = () => {
    // const { name } = useParams()
    const navigate = useNavigate()
    const { username, isAuthenticated, setAuthenticated } = useUser()
    
    useEffect(()=>{
        localStorage.setItem('Auth', JSON.stringify(isAuthenticated))
    },[isAuthenticated])

    function handleLogOut() {
        setAuthenticated(false)
        navigate('/*')
    }

    console.log(isAuthenticated)
    return (
        <div className='user'>
            <div>
                <h1>Hello {username ? username : 'User'}, Welcome to Profile</h1>
                <button onClick={handleLogOut}>
                    Log Out
                </button>
            </div>
            <img src={User} alt="" />

        </div>
    )
}

export default Userprofile
