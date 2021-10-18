import React from 'react'
import { useHistory } from 'react-router-dom';
import LeftColumn from './LeftColumn/LeftColumn';
import RightColumn from './RightColumn/RightColumn';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/Actions/auth';
export const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    if(!localStorage.getItem('profile'))history.push('/login');
    else{
        const data = JSON.parse(localStorage.getItem('profile'));
        dispatch(setUser(data));
    }
    return (
        <div className="container mt-4" >
            <div className="row justify-content-start" style={{height : "85vh" , width : "100vw"}}>
                <div className="col-3 m-1 overflow-auto" style={{background :"#f2dcdc", border : "2px groove red", height:"100%", width:"20%",borderRadius:"10px"}}>
                    <LeftColumn/>
                </div>
                <div className="col-8 m-1" style={{background:"#dcf2dc",border : "2px solid green" ,height:"100%", width:"70%", borderRadius:"10px"}}>
                    <RightColumn/>
                </div>
            </div>
        </div>
    )
}
