import * as api from '../../api';

export const getNote = (noteData) => async(dispatch) =>{
    try {
        const {data} = await api.getNote(noteData);
        dispatch({
            type : "GET_NOTE",
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateNote = (noteData) => async(dispatch) => {
    try {
        const data = await api.updateNote(noteData);
        dispatch({
            type : "UPDATE_NOTE",
            payload : data
        })
    } catch (error) {
        console.log(error);
    }
}
export const deleteNote = (noteData) => async(dispatch) => {
    try {
        await api.deleteNote(noteData);
        dispatch({
            type : "DELETE_NOTE",
        })
    } catch (error) {
        console.log(error);
    }
}
export const addNote = (noteData) => async(dispatch) => {
    try {
        const {data} = await api.addNote(noteData);
        dispatch({
            type : "ADD_NOTE",
            payload : data
        })
    } catch (error) {
        console.log(error);
    }
}

export const editNote = (data)=>{
    return{
        type: "EDIT_NOTE",
        payload : data,
    }
}
export const createNewNote = () => {
    return{
        type : "CREATE_NEW_NOTE",
    }
}