import React from 'react'
import './style.css'

const Task3 = () => {

    setInterval(timeChange, 1000);

    function timeChange() {
        const date = new Date();
        // let hour = date.getHours();
        // let minutes = date.getMinutes();
        // let seconds = date.getSeconds();
        // clock.textContent = `${hour}:${minutes}:${seconds}`


        let clock = document.getElementById('clock')
        clock.textContent = date.toLocaleTimeString()
    }

    return (
        <>
            <div id="clockBody">
                <h1>Digital Clock</h1>
                <div id='clock'></div>
            </div>
        </>
    )
}

export default Task3
