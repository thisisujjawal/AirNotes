import React, { useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Actions/auth'
export default function Login(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialData = {
        email: "",
        password: ""
    };
    const [loginData, setLoginData] = useState(initialData);
    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(loginData, history, props.setAlert));
    }
    return (
        <div className="d-flex align-items-center" style={{ width: "100vw", height: "100vh" }}>
            <div className="card text-center mx-auto" style={{ width: "50%" }}>
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="d-flex col-12">
                            <label htmlFor="inputEmail4" className="my-auto form-label col-2">Email</label>
                            <input type="email" name="email" className="form-control" id="inputEmail4" onChange={handleChange} />
                        </div>
                        <div className="d-flex col-12">
                            <label htmlFor="inputPassword4" className="my-auto form-label col-2">Password</label>
                            <input type="password" name="password" className="form-control" id="inputPassword4" onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="my-2">
                        <Link to="/signup">DON'T HAVE AN ACCOUNT? SIGNUP</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
