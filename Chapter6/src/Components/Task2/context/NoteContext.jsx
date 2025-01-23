import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";


export const NoteContext = createContext()

export const useNote = () => {
    const Note = useContext(NoteContext)
    return Note
}


export const Noteprovider = (props) => {
    const [noteList, setNoteList] = useState([])


    const fetchNotes = async () => {
        try {
            const response = await axios.get("http://localhost:3000/notes")
            setNoteList(response.data)
        } catch (error) {
            console.log("Error While Featching Notes", error)
        }
    }

    const deleteNote = async (noteId) => {
        try {
            await axios.delete(`http://localhost:3000/notes/${noteId}`)
        } catch (error) {
            console.log("Error While Deleting Note", error)
        }

        setNoteList((prevNote) => prevNote.filter((note) => note.id != noteId))
    }

    const addNote = async (newNote) => {
        try {
            const response = await axios.post("http://localhost:3000/notes", newNote);
            setNoteList((prevNote) => [...prevNote, response.data])
        } catch (error) {
            console.log("Error While Add Blog", error)
        }
        fetchNotes()
    }

    const updateNote = async (noteContent, noteId) => {
        try {
            await axios.patch(`http://localhost:3000/notes/${noteId}`, { noteContent: noteContent })
            setNoteList(prevNote => prevNote.map((note) => note.id === noteId ? {
                ...note,
                noteContent: noteContent
            } : note))

        } catch (error) {
            console.log("Error While Update Blog", error)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <NoteContext.Provider value={{ noteList, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}