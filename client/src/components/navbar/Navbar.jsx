import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar(props) {
    console.log("fgdf", props.name, props.page, props.userDetail)
    var type = props.name;
    var userDetail = props.userDetail;
    return (
        <div className="navbar">
            <div className="navContainer">
                {/* <Link to="/" ><span className="logo">Eventoe</span></Link> */}
                <span className="logo">Eventoe</span>
                {props.page === "home" && <ul className='homeul'>
                    <li><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/profile" state={{ type, userDetail }}>Profile</Link></li>
                    <li id='aboutUs'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/about" state={{ type, userDetail }}>About Us</Link></li>
                </ul>}

                {props.page === "profile" && <ul className="profileul">
                    <li id='aboutUs'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/about" state={{ type, userDetail }}>About Us</Link></li>
                </ul>}
                {(props.page === "home" || props.page === "profile" || props.page === "about") && <div className="logout">
                    <li id='logoutbtn'>Logout</li>
                </div>}
            </div>
        </div>
    )
}

export default Navbar
