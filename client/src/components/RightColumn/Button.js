import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addNote, deleteNote, updateNote } from '../../redux/Actions/note';

export default function Button() {
    const note = useSelector(store => store.note);
    const dispatch = useDispatch();
    const handleSave = () => {
        if (note.isNewNote) {
            dispatch(addNote(note));
        } else {
            dispatch(updateNote(note));
        }
    }
    const handleDelete = () => {
        dispatch(deleteNote({ noteId: note.noteId }))
    }
    return (
        <div className="d-flex flex-row justify-content-end my-3" style={{ width: "100%" }}>
            <div className="mx-1">
                {!note.isNewNote && <button onClick={handleDelete} type="button" className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg> Delete</button>}
            </div>
            <div className="mx-1">
                <button onClick={handleSave} type="button" className="btn btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>{note.isNewNote ? " Save" : " Update"}</button>
            </div>
        </div>
    )
}
