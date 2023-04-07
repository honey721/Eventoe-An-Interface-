
import React, { useState, useEffect } from 'react'
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import { useLocation, useParams } from 'react-router-dom'
import {
  faPhone,
  faHome,
  faMailReplyAll,
  faSearch,
  faLocation,
  faMapLocation
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
  const { state } = useParams();
  var date = new Date().toLocaleDateString();
  var [startdate, setstartdate] = useState(date);
  var [enddate, setenddate] = useState(date);
  var [days, setdays] = useState("2");
  var [toggle, setToggle] = useState(false);
  var [articles, setArticles] = useState([]);
  var [flag, setFlag] = useState(true);
  var [articleName, setArticleName] = useState('');
  var location = useLocation();
  const data = location.state.formData;
  // console.log("formData : ", data, location.state.userValue)

  const page = "home";


  var availJobs = ["labour", "photographer", "loader", "decorator"];


  var jobDetail = [
    {
      "job": "photographer",
      "days": 2,
      "start_date": date,
      "end_date": date
    }
  ]
  function handleChange(e) {
    setToggle(true)
    setArticleName(e.target.value);
    console.log("articleName", articleName,toggle)
    

  }

  useEffect(() => {
    console.log("called")
    getArticles();
    setFlag(false)
    console.log("is articles exist",articles)
   


  }, [flag])

  async function getArticles() {
    console.log("hello")

    await fetch("/article/findAll").then(result => {
      // console.log("result : ", result)
      return result.json();
    }).then(res => {
      console.log("my res : ", res)

      setArticles(res)
    })

  }



  console.log("articles", articles, articles.length)
  articles.map(ele => {
    console.log("jobs bro ",ele.jobs)});

  return (
    <div>
      <Navbar page={page} name={location.state.userValue} userDetail={data}/>
      <div className="container">
        <div className="sec1"> 
          {/* <div className="profile-pic">
            <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div> */}
          <div className="detail_heading">
            <h5>Your Profile</h5>
            <hr />
          </div>
          <div className="detail">
            <h2>{data.username}</h2>
            <span><FontAwesomeIcon icon={faPhone} /> {data.phone}</span>
            <span><FontAwesomeIcon icon={faMailReplyAll} />  {data.email}</span>
            <span><FontAwesomeIcon icon={faHome} />  {data.address}</span>
            {/* <img src="img/email.png" alt="" /> */}
          </div>
        </div>
        <div className="sec2">
          <div className="work_input">
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <input type="text" placeholder='Search for a job... ' name="worktype" id="" />
          </div>
          <div className="Articles">
            {articles.map(article => (
                

              <div className="article">
                <div className="upper">

                  <span id='Org_name'> {article.name} </span>
                  <span id='phone'><FontAwesomeIcon icon={faPhone} /> {article.phone} </span>
                  <span id='email'><FontAwesomeIcon icon={faMailReplyAll} />  {article.email} </span>
                  <span id='address'><FontAwesomeIcon icon={faHome} /> {article.address} </span>

                </div>
                <div className="lower">
                  <div className="desc">
                    <span><h2>Description : </h2>{article.desc}</span>
                  </div>
                  <div className="avail_work">
                    <h3>Available Jobs :
                      <select value={articleName} onChange={handleChange}>
                        <option value="">Choose jobs</option>
                        {article.jobs.map( option => (
                          <option value={option.workName}>{option.workName}</option>
                        ))}
                      </select></h3>
                    {toggle && article.jobs.map(job => (
                        job.workName === articleName && 
                        <div className="aboutJob">
                        <div className="days">
                          <label htmlFor="">For Days</label>
                          <input type="number" name="" value={job.days} id="" />
                        </div>
                        <div className="startDate">
                          <label htmlFor="">Start-Date</label>
                          <input type="text" name="" value={job.startDate} id="" />
                        </div>
                        <div className="endDate">
                          <label htmlFor="">End-Date</label>
                          <input type="text" name="" value={job.endDate} id="" />
                        </div>
                      </div>
                      
              
                        
                    )) }
                  </div>
                </div>

              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
