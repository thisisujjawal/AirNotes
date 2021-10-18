import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getUser } from '../../api';
import { createNewNote } from '../../redux/Actions/note';
import Note from './Note'

export default function LeftColumn() {
    const { isNewNote, title } = useSelector(store => store.note);
    const [noteArray, setNoteArray] = useState([]);
    const dispatch = useDispatch();
    const fetchUser = async () => {
        try {
            const { data } = await getUser();
            setNoteArray(data.user.notes);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [isNewNote, title])
    const handleClick = () => {
        dispatch(createNewNote());
    }
    return (
        <div className="d-flex flex-column p-2 align-items-center">
            <button type="button" className="btn btn-success" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg> Create New Note</button>
            {noteArray.map(note => <Note key={note.id} id={note.id} title={note.title} />)}
        </div>
    )
}
