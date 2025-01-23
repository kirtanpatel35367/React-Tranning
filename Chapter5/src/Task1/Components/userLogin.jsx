import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

const userLogin = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { setAuthenticated, isAuthenticated } = useUser()
    const navigate = useNavigate()
    const userList = JSON.parse(localStorage.getItem('userList'))

    useEffect(() => {
        localStorage.setItem('Auth', JSON.stringify(isAuthenticated))
    }, [isAuthenticated])

    function handleLogIn(e) {
        e.preventDefault()
        const user = userList.find((user) => (user.email === email && user.password === password))
        if (user) {
            setAuthenticated(true)
            navigate('/')
        }
        else {
            alert("Enter Correct Email or Password")
            setEmail('')
            setPassword('')
        }
    }

    return (
        <>
            <form className='userRegister' action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" />
                </div>
                <button onClick={handleLogIn}>Submit</button>
                <div style={{ textAlign: "center" }}>
                    New User {<NavLink to="/userRegister">Sign Up</NavLink>}
                </div>
            </form>
        </>
    )
}

export default userLogin
