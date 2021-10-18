import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000/api"});
API.interceptors.request.use(req => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const getNote = (noteData) => API.post('/notes/getnote', noteData);
export const addNote = (note) => API.post('/notes/addnote' , note);
export const updateNote = (note) => API.put('/notes/updatenote' , note);
export const deleteNote = (noteData) => API.delete(`/notes/deletenote/${noteData.noteId}`);


export const signup = (signupData) => API.post("/auth/signup",signupData);
export const login = (loginData) => API.post("/auth/login" , loginData);
export const getUser = () => API.get('/auth/getuser');