import React, { useEffect, useReducer } from 'react'
import CreateNotes from './CreateNotes'
import Note from './note'
import { v4 as uuid } from 'uuid'

const Notes = () => {

    const initialState = {
        inputText: "",
        notelist: JSON.parse(localStorage.getItem("noteList")),
        editNote: null,
        searchQuery: "",
    };

    function reducer(state, action) {
        switch (action.type) {
            case "ADD_NOTE":
                return {
                    ...state,
                    notelist: [
                        ...state.notelist, {
                            id: uuid(),
                            noteContent: action.payload.noteContent
                        }
                    ]
                };
            case "UPDATE_NOTE":
                return {
                    ...state,
                    notelist: state.notelist.map((note) =>
                        note.id === action.payload.id ? {
                            ...note, noteContent: action.payload.noteContent
                        } : note
                    ),
                    editNote: null,
                    inputText: "",
                }

            case "EDIT_NOTE":
                return {
                    ...state,
                    editNote: action.payload.id,
                    inputText: action.payload.noteContent
                }

            case "DELETE_NOTE":
                return {
                    ...state,
                    notelist: state.notelist.filter((note) => note.id != action.payload.id),
                    inputText: ""
                }
            case "SET_INPUT_TEXT":
                return { ...state, inputText: action.payload };
            case "SET_NOTE_LIST":
                return { ...state, notelist: action.payload };
            case "SET_EDIT_NOTE":
                return { ...state, editNote: action.payload };
            case "SET_SEARCH_QUEARY":
                return { ...state, searchQuery: action.payload };
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState); //Initilize useReducer

    useEffect(() => {
        if (state.notelist && state.notelist.length > 0) {
            localStorage.setItem('noteList', JSON.stringify(state.notelist));
        }
        else {
            localStorage.setItem('noteList', JSON.stringify([]))
        }
    }, [state.notelist])

    const handleSaveNote = () => {

        if (state.inputText) {
            if (state.editNote) {
                dispatch({
                    type: "UPDATE_NOTE",
                    payload: {
                        id: state.editNote,
                        noteContent: state.inputText
                    }
                })
            }
            else {
                dispatch({
                    type: "ADD_NOTE",
                    payload: {
                        id: uuid(),
                        noteContent: state.inputText
                    }
                })
            }
        }
        dispatch({ type: "SET_INPUT_TEXT", payload: "" });
        dispatch({ type: "SET_EDIT_NOTE", payload: null });

    }

    const handleEditNote = (id, noteContent) => {
        dispatch({
            type: "EDIT_NOTE",
            payload: { id, noteContent }
        })
    }

    const haldleDeleteNote = (id) => {
        dispatch({
            type: "DELETE_NOTE",
            payload: { id }
        })
    }

    // useEffect(() => {
    //     const notes = JSON.parse(localStorage.getItem("noteList")) || [];
    //     if (notes) {
    //         setNoteList(notes)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("noteList", JSON.stringify(notelist)) || []
    // }, [notelist])


    const searchedData = state.notelist != null && state.notelist.filter((note) =>
        state.searchQuery.toLowerCase() === '' ? note : note.noteContent.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
    // console.log(state.editNote)

    return (
        <div className="noteContainer">
            <CreateNotes inputText={state.inputText} handleInputChange={(value) => dispatch({ type: "SET_INPUT_TEXT", payload: value })} handleSaveNote={handleSaveNote} />

            {
                state.notelist.length != 0 ?
                    (
                        <>
                            <h2>Your Notes Here!!</h2>
                            <div className="searchBar">
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    id='serachBar'
                                    value={state.searchQuery}
                                    onChange={(e) => dispatch({ type: "SET_SEARCH_QUEARY", payload: e.target.value })}
                                    className="search-input"
                                />
                            </div>
                            <div className="NoteList">
                                <div className='card'>
                                    {

                                        (searchedData || state.notelist).map((note) => (
                                            <Note key={note.id} id={note.id} noteContent={note.noteContent} handleEditNote={handleEditNote} handleDeleteNote={haldleDeleteNote} />
                                        ))
                                    }</div>
                            </div>
                        </>
                    ) :

                    (
                        <h1 className='emptyList'>Start With Your First Note</h1>
                    )
            }


        </div>

    )
}

export default Notes
