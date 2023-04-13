import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './about.css'

function About() {
  return (
    <div>
      <Navbar/>
      <div className="description">
        <ul>
            <li>Eventoe is a website which is based on building an interface website for the company's which organize different types of events and unemployed youth. </li>
            <li>There are many types of events like wedding , fashion show , award ceremony, product launch , concert etc.  And also many types of works like planner , caterers, decorator , photographer , labour , designer & etc. </li>
            <li>Providing security and protection to your personal Information/detail is one of the main concern of this website(Eventoe). </li>
            <li>This website is mainly helpful for providing short time work to the youth of our country, so that they can gain some pocket money for themselves.</li>
            <li>Eventoe takes this responsibility of providing only verified companies jobs to the users.</li>
            <li>Each company registered with Eventoe would have a valid - Corporate Identification Number. </li>
        </ul>

      </div>
    </div>
  )
}

export default About
