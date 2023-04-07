import React from 'react'
import "./profile.css"
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Profile() {
    var location = useLocation();
    var userDetail = location.state.userDetail;
    var userType = location.state.type;
    console.log(userDetail)
    return (
        <div>
            <Navbar page={"profile"} />
            {location.state.type === "Employee" && <div className="emp">
                <span id='profile'>Hello! {userDetail.username}</span>
                <span id='profileSpan2' >Below is your personal detail</span>
                <hr />
                <form action="" id='comform'>
                    <br />
                    <label htmlFor="">Username</label>
                    <input type="text" name="" value={userDetail.username} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Age</label>
                    <input type="text" name="" value={userDetail.age} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Mobile No.</label>
                    <input type="text" name="" value={userDetail.phone} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Address</label>
                    <input type="text" name="" value={userDetail.address} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Registered Email Id</label>
                    <input type="text" name="" value={userDetail.email} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Gender</label>
                    <input type="text" name="" value={userDetail.gender} id="" /><br /><br /><br /><br />
                </form>
            </div>}
            {location.state.type === "Company" && <div className="com">

                <span id='profile'>Hello! {userDetail.username}</span>
                <span id='profileSpan2' >Below is your personal detail</span>
                <hr />
                <form action="" id='comform'>
                    <br />
                    <label htmlFor="">Organization Name</label>
                    <input type="text" name="" value={userDetail.username} id="" /><br /><br /><br /><br />

                    <label htmlFor="">CIN No.</label>
                    <input type="text" name="" value={userDetail.CIN_No} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Contact No.</label>
                    <input type="text" name="" value={userDetail.phone} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Address</label>
                    <input type="text" name="" value={userDetail.address} id="" /><br /><br /><br /><br />

                    <label htmlFor="">Registered Email Id</label>
                    <input type="text" name="" value={userDetail.email} id="" /><br /><br /><br /><br />
                </form>
            </div>}
            {/* <footer>
            </footer> */}
            <Footer />
            

        </div>
    )
}

export default Profile
