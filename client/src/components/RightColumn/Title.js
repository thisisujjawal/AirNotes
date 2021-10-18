import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editNote } from '../../redux/Actions/note';
export default function Title() {
    const note = useSelector(store => store.note);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const data = {
            title : event.target.value,
            description : note.description,
        }
        dispatch(editNote(data));
    }
    return (
        <div className="mt-3" style={{width : "100%", height: "20%"}}>
            <input value={note.title} onChange={handleChange} style={{border:"2px solid black", background:"#edebf2",width:"100%"}} type="text"  placeholder="Title"/>
        </div>
    )
}
