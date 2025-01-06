import React from 'react'
import './style.css'

const note = ({ id, noteContent, handleEditNote,handleDeleteNote }) => {
    return (
        <>
            <div className="note">
                <p>Note Content : {noteContent}</p>
                <div className='buttons'>
                    <button onClick={() => handleEditNote(id, noteContent)}>Edit Note</button>
                    <button onClick={()=>handleDeleteNote(id)}>Delete Note</button>
                </div>
            </div>
        </>
    )
}

export default note
