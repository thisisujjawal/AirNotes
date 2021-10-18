import React, { useState } from 'react'
import { Link , useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/Actions/auth'
export default function SignUp(props) {
    const history = useHistory();
    const initialData = {
        name: "",
        email: "",
        password: ""
    }
    const [signupData, setSignupData] = useState(initialData);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signup(signupData,history,props.setAlert));
    }
    return (
        <div className="d-flex align-items-center" style={{width:"100vw", height : "100vh"}}>
            <div className="card text-center mx-auto" style={{ width: "50%" }}>
                <div className="card-header">SignUp</div>
                <div className="card-body">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="d-flex col-12">
                            <label htmlFor="inputName" className="my-auto form-label col-2">Name</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange} id="inputName" />
                        </div>
                        <div className="d-flex col-12">
                            <label htmlFor="inputEmail4" className="my-auto form-label col-2">Email</label>
                            <input type="email" name="email" onChange={handleChange} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="d-flex col-12">
                            <label htmlFor="inputPassword4" className="my-auto form-label col-2">Password</label>
                            <input type="password" name="password" onChange={handleChange} className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <button type="submit" onChange={handleChange} className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="my-2">
                            <Link  to="/login">ALREADY HAVE AN ACCOUNT? LOGIN</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
