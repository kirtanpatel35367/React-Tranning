import React, { useState } from 'react'
import { useNote } from './context/NoteContext';
import './Notestyle.css';

const CreateNote = () => {

    const [noteContent, setNoteContent] = useState()
    const {addNote} = useNote()

    const saveNote =()=>{
        addNote({noteContent})
        setNoteContent('')
    } 

    return (
        <div className="note-container">
            <h2>Create a New Note</h2>
            <div className="note-card">
                <label htmlFor="noteContent" className="note-label">Note Content</label>
                <textarea name="noteContent" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} id="noteContent" className="note-textarea" placeholder="Write your note here..."></textarea>
                <button onClick={saveNote} className="save-btn">Save Note</button>
            </div>
        </div>
    )
}

export default CreateNote
