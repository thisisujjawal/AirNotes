import React from 'react'
import {useDispatch} from 'react-redux';
import { getNote } from '../../redux/Actions/note';

export default function Note(props) {
    const {title, id} = props;
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(getNote({noteId : id}));
    }
    return (
        <div onClick={handleClick} className="card my-2" style={{background:"#edebf2", width: "90%", cursor:"pointer"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}
