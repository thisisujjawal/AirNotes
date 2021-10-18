import React from 'react'

export const About = () => {
    return (
        <div className="d-flex align-items-center" style={{ width: "100vw", height: "100vh" }}>
        <div className="card text-center mx-auto" style={{ width: "50%" }}>
            <div className="card-header">
                About
            </div>
            <div className="card-body">
                <p>My name is Ujjawal Singhal and I have made this project so that anybody can store their notes over cloud and access them from anywhere</p>
                <p>Please refer to my <a href="https://github.com/thisisujjawal">GitHub</a> account for more projects</p>
            </div>
        </div>
    </div>
    )
}
