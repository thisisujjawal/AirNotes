const initialState = {
    title : "",
    description: "",
    isNewNote : true,
    noteId : ""
}
const noteReducer = (state  = initialState , action) => {
    switch(action.type){
        case 'GET_NOTE':
            return {
                ...state , 
                title : action.payload.title,
                description : action.payload.description,
                noteId : action.payload._id,
                isNewNote : false
            }
        case 'UPDATE_NOTE':{
            return {
                ...state, 
                title : action.payload.title,
                description : action.payload.description,
                isNewNote : false
            }}
        case 'DELETE_NOTE':
            return{
                ...state,
                title: "",
                description: "",
                isNewNote : true
            }
        case 'ADD_NOTE':{
            return{
                ...state,
                title : action.payload.title,
                description : action.payload.desciption,
                isNewNote: false,
                noteId : action.payload._id
            }}
        case 'EDIT_NOTE':
            return{
                ...state,
                title : action.payload.title,
                description : action.payload.description
            }
        case 'CREATE_NEW_NOTE':
            return{
                ...state,
                title : "",
                description : "",
                isNewNote : true,
            }
        default : return state;

    }
}
export default noteReducer;