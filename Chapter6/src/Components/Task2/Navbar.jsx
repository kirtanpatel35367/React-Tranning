import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../../firebase.config';
import { FaUser } from "react-icons/fa";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Notestyle.css';

const Navbar = () => {
    const [userName, setUserName] = useState(() => {
        const storedUser = localStorage.getItem('noteUser');
        return storedUser ? JSON.parse(storedUser) : "";
    });

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        if (!userName) {
            try {
                const result = await signInWithPopup(firebaseAuth, provider);
                // console.log("Google Sign-in Successful:", result);
                const user = result.user;
                setUserName(user.displayName);
            } catch (error) {
                console.error('Google Sign-in Error:', error.message);
            }
        }
    };

    useEffect(() => {
        localStorage.setItem("noteUser", JSON.stringify(userName))
    }, [userName])
    

    return (
        <div>
            <nav>
                <ul>
                    <NavLink exact className="navLink" to="/">Notes</NavLink>
                    <NavLink exact className="navLink" to="/createnote">Create Note</NavLink>
                </ul>
                <div className="userLogin">
                    <FaUser onClick={login} />
                    <p>{userName ? userName : "Guest"}</p>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;
