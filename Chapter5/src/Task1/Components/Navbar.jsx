import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import '../style.css'

const Navbar = () => {
    const { isAuthenticated, setAuthenticated } = useUser()
    const { username } = useUser()
    const navigate = useNavigate()
    function handleSignUp() {
        navigate('/userRegister')
    }

    function handleLogIn() {
        navigate('/userlogin')
    }

    return (
        <>
            <nav>
                <ul>
                    {
                        isAuthenticated ? (
                            <li> <NavLink className="navlink" to='/'>Dashboard</NavLink></li>
                        ) :
                            (
                                <li> <NavLink className="navlink" to='/userLogin'>Dashboard</NavLink></li>
                            )
                    }
                    <li> <NavLink className="navlink" to='/aboutus'>AboutUs</NavLink></li>
                    <li> <NavLink className="navlink" to='/contactus'>ContactUs</NavLink></li>
                    {
                        isAuthenticated ? (
                            <li>
                                <NavLink className="navlink" to={`/userprofile/${username}`}>User Profile</NavLink>
                            </li>
                        ) : (
                            <li>
                                <NavLink className="navlink" to="/*">User Profile</NavLink>
                            </li>
                        )
                    }
                    {
                        isAuthenticated ? (
                            <li><NavLink className="navlink" to='/store'>Store</NavLink></li>
                        ) : (
                            <li><NavLink className="navlink" to='/userLogin'>Store</NavLink></li>
                        )
                    }
                </ul>
                <div>
                    <button onClick={handleSignUp} className='LoginButton'>Sign Up</button>

                    {!isAuthenticated ? (<button onClick={handleLogIn} className='LoginButton'>Log In</button>) : null}


                </div>
            </nav>

        </>
    )
}

export default Navbar
