const initialState = {
    name : "",
    email : "",
    token : "",
}
const authReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'AUTH' : 
            return {
                ...state,
                name : action.payload.name,
                email : action.payload.email,
                token : action.payload.token,
            }
        case "REMOVE_AUTH":
            return {
                ...state, 
                name : "",
                email : "",
                token : ""
            }
        case "SET_USER":
            return{
                ...state,
                name : action.payload.name,
                email : action.payload.email,
                token : action.payload.token
            }
        default : 
            return state
    }

}
export default authReducer;