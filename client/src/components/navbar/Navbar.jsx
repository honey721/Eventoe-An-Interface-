import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar(props) {
    console.log("fgdf" ,props.name,props.page)
    var type = props.name;
    return (
        <div className="navbar">
            <div className="navContainer">
                {/* <Link to="/" ><span className="logo">Eventoe</span></Link> */}
                <span className="logo">Eventoe</span>
                {props.page === "home" && <ul>
                    <li>Profile</li>
                    <li>Logout</li>
                    {/* <Link to="/profile" state={{type}}></Link> */}
                </ul>}
            </div>
        </div>
    )
}

export default Navbar
