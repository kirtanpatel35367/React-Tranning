import React from 'react'
import './style.css'

const CreateNotes = ({ inputText, handleInputChange, handleSaveNote }) => {
    return (
        <>
            <div className="note-card">
                <textarea name="notearea" id="noteArea" value={inputText} onChange={(e) =>handleInputChange(e.target.value)} placeholder='Start Here'></textarea>
                <div className="buttons">
                    <button onClick={handleSaveNote}>Save Note</button>
                </div>
            </div>
        </>
    )
}

export default CreateNotes
