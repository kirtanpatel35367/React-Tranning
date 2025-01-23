import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNote } from './context/NoteContext'

const UpdateNote = () => {
    const { noteId } = useParams()
    const { noteList, updateNote } = useNote()

    const note = noteList && noteList.find((note) => note.id === noteId)
    const [noteContent, setNoteContent] = useState(note ? note.noteContent : "")

    const handleUpdateNote = () => {
        updateNote(noteContent, noteId)
    }


    return (
        <div className="note-container">
            <h2>Update Note</h2>
            <div className="note-card">
                {
                    noteList ? (
                        <>  <label htmlFor="noteContent" className="note-label">Note Content</label>
                            <textarea name="noteContent" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} id="noteContent" className="note-textarea" placeholder="Write your note here..."></textarea>
                            <button onClick={handleUpdateNote} className="save-btn">Update Note</button>
                        </>

                    ) : (
                        <div>Loading</div>
                    )
                }

            </div>
        </div>
    )
}

export default UpdateNote
