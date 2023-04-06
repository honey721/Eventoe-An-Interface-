import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import './signup.css'

function Signup() {
  var [userValue, setUserValue] = useState("Employee");
  var [workValue, setWorkValue] = useState("");
  // var [message, setMessage] = useState("");
  var [works, setWorks] = useState("");
  var [days, setDays] = useState(0);
  var [startDate, setstartDate] = useState();
  var [endDate, setendDate] = useState();
  var [workDetail, setWorkDetail] = useState([]);

  var [workValueList, setWorkValueList] = useState([]);

  var [selectedOption, setSelectedOption] = useState(false);
  var [flag, setFlag] = useState(false);
  var [f1, setf1] = useState(false);
  var [f2, setf2] = useState(false);
  var [f3, setf3] = useState(false);

  const navigate = useNavigate();

  var d = new Date();
  const page = "signup";
  const options = [
    {
      label: "Employee",
      value: "Employee",
    },
    {
      label: "Company",
      value: "Company",
    }
  ];
  const workOptions = [
    {
      label: "select work",
      value: "select work"
    },
    {
      label: "labour",
      value: "labour"
    },
    {
      label: "photographer",
      value: "photographer",
    },
    {
      label: "decorator",
      value: "decorator",
    },

    {
      label: "designer",
      value: "designer"
    },
    {
      label: "loading worker",
      value: "loading worker"
    },
    {
      label: "groomer",
      value: "groomer"
    }
  ];


  // function handleMessage(e) {
  //   setMessage(e.target.value);
  // }

  function handleChange(e) {
    setUserValue(e.target.value);
  }

  useEffect(() => {
    setWorkValueList(workValueList => [...workValueList, "select work"]);
  }, [])
  function handleChangeWork(e) {
    var isExist = false;
    for (var value of workValueList) {
      if (value === e.target.value) {
        isExist = true;
      }
    }
    if (isExist === false) {
      setSelectedOption(true);
      setWorkValue(e.target.value);
      setWorkValueList(workValueList => [...workValueList, e.target.value]);
    }
    else {
      setWorkValue(e.target.value);
    }
  }

  function saveJobData(e) {
    e.preventDefault();
    console.log(startDate,endDate , typeof(startDate))

    if(startDate[8]+startDate[9] <= endDate[8]+endDate[9] && startDate[5]+startDate[6] <= endDate[5]+endDate[6])
    {
      setWorkDetail(workDetail => [...workDetail, { workName: workValue, days: days, startDate: startDate, endDate: endDate }])
      setSelectedOption(false)
      setFlag(false)
    }
    else{
      alert("please select valid Dates")
    }


   
  }


  useEffect(() => {
    console.log(flag, f1, f2, f3)
    if (f1 === true && f2 === true && f3 === true) {
      setFlag(true)
      console.log(flag, f1, f2, f3)


      setf1(false)
      setf2(false)
      setf3(false)
    }

  });


  // if (works !== "" && message !== "") {
  //   var str = works + "+" + message;
  //   var selectedWorks = str.split("+");
  // }
  // else if (works === "" && message !== "") {
  //   var selectedWorks = message.split("+");
  // }
  // else if (works !== "" && message === "") {
  //   var selectedWorks = works.split("+");
  // }
  // else {
  //   var selectedWorks = [];
  // }



  async function handleFormData(e) {
    // console.log(e.target.gender.value+ " sadssdsds")
    e.preventDefault();
    if (e.target.password.value != e.target.cPassword.value) {
      return alert("password are not same!")
    }
    if (userValue === "Employee") {
      await fetch("/auth/regemp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "username": e.target.name.value,
          "age": e.target.age.value,
          "phone": e.target.phone.value,
          "address": e.target.address.value,
          "gender": e.target.gender.options[e.target.gender.selectedIndex].text,
          "email": e.target.email.value,
          "password": e.target.password.value
        })
      }).then(result => {
        console.log("result : ", result);
        if (result.status != 200) {
          alert("some field already exist!")
        }
        else {
          alert("Account Created Successfully!")
          navigate('/home', {
            state: {
              formData: {
                "username": e.target.name.value,
                "age": e.target.age.value,
                "phone": e.target.phone.value,
                "address": e.target.address.value,
                "gender": e.target.gender.options[e.target.gender.selectedIndex].text,
                "email": e.target.email.value,


                "password": e.target.password.value
              }, userValue
            }
          });
        }
        return result.json();
      }).then(res => {
        console.log("res : ", res);
      })
    }


    else if (userValue === "Company") {
      await fetch("/auth/regcom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "username": e.target.name.value,
          "phone": e.target.phone.value,
          "CIN_No": e.target.cin.value,
          "desc": e.target.desc.value,
          "address": e.target.address.value,
          "work": workDetail,
          "email": e.target.email.value,
          "password": e.target.password.value,

        })
      }).then(async result => {
        console.log("result : ", result);
        if (result.status != 200) {
          alert("some field already exist!")
        }
        else {




          await fetch("/article", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              "name": e.target.name.value,
              "phone": e.target.phone.value,
              "email": e.target.email.value,
              "address": e.target.address.value,
              "desc": e.target.desc.value,
              "jobs": workDetail
            })
          }).then(result => {
            console.log("result : ", result);
            return result.json();

          }).then(res => {
            console.log("res : ", res);
          })





          alert("Account Created Successfully!")

          navigate('/home', {
            state: {
              formData: {
                "username": e.target.name.value,
                "phone": e.target.phone.value,
                "CIN_No": e.target.cin.value,
                "desc": e.target.desc.value,
                "address": e.target.address.value,
                "work": workDetail,
                "email": e.target.email.value,
                "password": e.target.password.value,

              }, userValue
            }
          });

        }

        return result.json();
      }).then(res => {
        console.log("res : ", res);
      })

    }

  }
  console.log(workDetail, workValueList)

  return (
    <div>
      <Navbar page={page} name={userValue} />
      <h1 id='signup-heading'>Eventoe Signup</h1>
      <br />
      <div className="signup-div">
        <select value={userValue} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <br />
      {userValue === "Employee" && <div className="emp-form">

        <div className="inner-emp-form">

          <div className="signup-header">
            <span>Employee Signup page</span>
          </div>
          <form method="POST" onSubmit={handleFormData} >
            <label htmlFor="">Enter your name</label><br /><br />
            <input type="text" name="name" id="" required /><br /><br />
            <label htmlFor="">Enter your Age</label><br /><br />
            <input type="number" name="age" id="" required /><br /><br />
            <label htmlFor="">Enter Mobile No.</label><br /><br />
            <input type="text" name="phone" id="" required /><br /><br />
            <label htmlFor="">Address</label><br /><br />
            <input type="text" name="address" id="" required /><br /><br />
            <label htmlFor="">Gender</label><br /><br />
            <select name="gender" id="" required>
              <option value="">Select your gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select><br /><br />
            <label htmlFor="">Enter your Email</label><br /><br />
            <input type="email" name="email" id="" required /><br /><br />
            <label htmlFor="">Enter your Password</label><br /><br />
            <input type="password" name="password" id="" required /><br /><br />
            <label htmlFor="">Confirm Password</label><br /><br />
            <input type="password" name="cPassword" id="" required /><br /><br />
            {/* <Link to="/home" state={{ userValue }}><button type="submit" className="signup-btn">Signup</button></Link> */}
            <button type="submit" className="signup-btn">Signup</button>
          </form>

        </div>
      </div>
      }
      {userValue == "Company" && <div className="company-form" >
        <div className="inner-emp-form">
          <div className="signup-header">
            <span>Company Signup page</span>
          </div>
          <form method='POST' onSubmit={handleFormData}>
            <label htmlFor="">Enter Organization name</label><br /><br />
            <input type="text" name="name" id="" required /><br /><br />
            <label htmlFor="">Owner Mobile No.</label><br /><br />
            <input type="number" name="phone" id="" required /><br /><br />
            <label htmlFor="">Enter CIN No. </label><br /><br />
            <input type="number" name="cin" id="" Length={21} required /><br /><br />
            <label htmlFor="">Description</label><br /><br />
            <textarea name="desc" id="" cols="57" rows="10" ></textarea><br /><br />
            <label htmlFor="">Office Address</label><br /><br />
            <input type="text" name="address" id="" required /><br /><br />
            <label htmlFor="">Available work</label><br /><br />

            <select name='work' value={workValue} onChange={handleChangeWork}>
              {workOptions.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>

            {/* <input value={message} onChange={handleMessage} type="text" name="age" id="work-inp" placeholder='Enter here, if require work not in the list' /> */}
            <br /><br />
            {selectedOption === true && <div className="jobDetail">
              <form>
                <label htmlFor="">For how many days : </label>
                <input type="number" name="days" id="" onChange={(e) => {
                  setDays(e.target.value)
                  setf1(true)
                }} required />
                <br />
                <label htmlFor="">Start Date : </label>
                <input type="date" name="startDate" id="" onChange={(e) => {
                  setstartDate(e.target.value)
                  setf2(true)
                }} required />
                <br />
                <label htmlFor="">End Date : </label>
                <input type="date" name="endDate" id="" onChange={(e) => {
                  setendDate(e.target.value)
                  setf3(true)
                }} required />
                <br />
                <button disabled={!flag} onClick={saveJobData}>Add</button></form>
            </div>
            }
            <br />
            <label htmlFor="">Email I'd</label><br /><br />
            <input type="email" name="email" id="" required /><br /><br />
            <label htmlFor="">Enter your Password</label><br /><br />
            <input type="password" name="password" id="" required /><br /><br />
            <label htmlFor="">Confirm Password</label><br /><br />
            <input type="password" name="cPassword" id="" required /><br /><br />
            {/* <Link to="/home" state={{ userValue }}><button type="submit" className="signup-btn">Signup</button></Link> */}
            <button type="submit" className="signup-btn">Signup</button>
          </form>
        </div>
        <div className="upprQuery">
        <div className="generateQuery">
          <h3>If you didn't find required work!, then you can generate a query to us!</h3>
            <input type="text" name="" id="" placeholder=' write required work name here which you did not find in the given list ' />
            <button id='queryBtn'>Generate Query</button>
        </div>
        </div>
        
      </div>}
    </div>
  )
} 

export default Signup
