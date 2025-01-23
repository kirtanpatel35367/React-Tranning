import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useNote } from './context/NoteContext';
import Note from './Note';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const NoteList = () => {
    const navigate = useNavigate()
    const { noteList, deleteNote } = useNote()

    //NoteId Fetch From Note Component
    function handleDeleteNote(noteId) {
        deleteNote(noteId)
    }

    function handleupdateNote(noteId) {
        navigate(`/updatenote/${noteId}`)
    }

    console.log(noteList)
    return (
        <>
            <div className="noteDashboard">
                <h1>Your Notes</h1>
                <div className="note">
                    {
                        noteList && noteList.map((note) =>
                            <Note key={note.id} noteId={note.id} noteContent={note.noteContent} handleupdateNote={handleupdateNote} handleDeleteNote={handleDeleteNote} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NoteList
