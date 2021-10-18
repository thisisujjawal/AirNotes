import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editNote } from '../../redux/Actions/note';
export default function NotePad() {
    const note = useSelector(store => store.note);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const data = {
            title : note.title,
            description : event.target.value
        }
        dispatch(editNote(data));
    }
    return (
        <div className="mt-3" style={{width : "100%", height: "60%"}}>
            <textarea value={note.description} rows="19" onChange={handleChange} style={{background:"#edebf2",border:"2px solid black",width:"100%"}} placeholder="Write your note here..."></textarea>
        </div>
    )
}
