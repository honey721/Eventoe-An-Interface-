import React from 'react'
import "./profile.css"
import { useLocation } from 'react-router-dom'


function Profile() {
    var location = useLocation();

    return (
        <div>
            <h1>{location.state.type}</h1>
            { location.state.type === "employee" && <div className="emp">
                <div className="otherDetail">
                    <label htmlFor="">Username</label><br/>
                    <input type="text" name="" value="Honey Verma" id="" /><br/><br/>

                    <label htmlFor="">Age</label><br/>
                    <input type="text" name="" value="22" id="" /><br/><br/>

                    <label htmlFor="">Mobile No.</label><br/>
                    <input type="text" name="" value="8076006891" id="" /><br/><br/>

                    <label htmlFor="">Address</label><br/>
                    <input type="text" name="" value="Akshay enclave 1, govindpuram ghaziabad" id="" /><br/><br/>

                    <label htmlFor="">Registered Email Id</label><br/>
                    <input type="text" name="" value="honeysoni722001@gmail.com" id="" /><br/><br/>
                
                    <label htmlFor="">Gender</label><br/>
                    <input type="text" name="" value="Male" id="" /><br/><br/>
                </div>
            </div>}
            { location.state.type === "Company"  && <div className="com">
                <div className="com_Detail">
                    <label htmlFor="">Organization Name</label><br/>
                    <input type="text" name="" value="L&T soft." id="" /><br/><br/>

                    <label htmlFor="">CIN No.</label><br/>
                    <input type="text" name="" value="2243242342341324234" id="" /><br/><br/>

                    <label htmlFor="">Contact No.</label><br/>
                    <input type="text" name="" value="8076006891" id="" /><br/><br/>

                    <label htmlFor="">Address</label><br/>
                    <input type="text" name="" value="Akshay enclave 1, govindpuram ghaziabad" id="" /><br/><br/>

                    <label htmlFor="">Registered Email Id</label><br/>
                    <input type="text" name="" value="honeysoni722001@gmail.com" id="" /><br/><br/>
                
                    <label htmlFor="">Gender</label><br/>
                    <input type="text" name="" value="Male" id="" /><br/><br/>
                </div>
            </div>}
        </div>
    )
}

export default Profile
