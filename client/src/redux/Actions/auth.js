import * as api from '../../api';

export const signup = (signupData,history,setAlert) => async(dispatch) => {
    //signupData contains : name , email, passoword
    try {
        const {data} = await api.signup(signupData);
        //this data contains name, email, token;
        dispatch({
            type : "AUTH",
            payload : data
        })
        history.push('/');
    } catch (error) {
        if(Array.isArray(error.response.data.msg)){
            setAlert({ message : error.response.data.msg[0].msg , type :"warning"})
        }else
        setAlert({ message : error.response.data.msg , type :"danger"})
    }
}
export const login = (loginData, history, setAlert) => async(dispatch) => {
    try {
        const {data} = await api.login(loginData);
        dispatch({
            type : "AUTH",
            payload : data
        })
        localStorage.setItem('profile', JSON.stringify(data));
        history.push('/');
    } catch (error) {
        setAlert({ message : error.response.data.msg , type :"danger"})
    }
}
export const logout = () => {
    localStorage.removeItem('profile');
    return {
        type : "REMOVE_AUTH",
    }
}
export const setUser = (data) => {
    return{
        type : "SET_USER",
        payload : data,
    }
}
