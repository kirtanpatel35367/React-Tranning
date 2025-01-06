import React from 'react'
import './style.css'

const Task2 = (props) => {
    return (
        <div>
            <>
                <div className="userProfile">
                    <h1>User Details</h1>
                    <div id="userDetails">
                        <div id="userImage">
                            <img src={props.url} alt="This is Image" />
                        </div>
                        <h3>Name:{props.name}</h3>
                        <p>Bio:{props.bio}</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Task2
