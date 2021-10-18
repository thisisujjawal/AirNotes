import React from 'react'

function Alert(props) {
    const handleClick = ()=>{
        props.setAlert(null);
    }
    return (
        props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.message}</strong>
            <button onClick={handleClick} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;
