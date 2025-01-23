import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, NavLink } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

const UserRegister = () => {
    const { userList, setUserList, username, setUserName, email, setEmail, password, setPassword, isAuthenticated, setAuthenticated } = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    
    useEffect(() => {
        localStorage.setItem('userList', JSON.stringify(userList))
        localStorage.setItem('Auth', JSON.stringify(isAuthenticated))
    }, [userList, isAuthenticated])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username && email && password) {
            setUserList((prev) => [...prev, {
                username,
                email,
                password,
            }])
        }
        else {
            return <div>Fill All Required Input First</div>
        }

        navigate(`/userlogin`)
        setUserName("")
        setEmail("")
        setPassword("")
    }




    console.log(userList)
    return (
        <>
            <form className='userRegister' action="">
                <div>
                    <label htmlFor="userName">UserName</label>
                    <input required value={username} onChange={(e) => setUserName(e.target.value)} type="text" name="userName" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <div style={{ textAlign: "center" }}>
                    Already User ? {<NavLink to="/userlogin">Log In</NavLink>} Here
                </div>
            </form>
        </>
    )
}

export default UserRegister
