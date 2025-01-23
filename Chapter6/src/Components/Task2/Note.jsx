import React from 'react';
import './Notestyle.css';

const Note = ({ noteId, noteContent, handleDeleteNote, handleupdateNote }) => {
    return (
        <div className="note-card">
            <p className="note-content">{noteContent}</p>
            <div className="note-actions">
                <button onClick={() => handleDeleteNote(noteId)} className="note-button delete-button">Delete</button>
                <button onClick={() => handleupdateNote(noteId)} className="note-button edit-button">Edit</button>
            </div>
        </div>
    );
}

export default Note;
