import React from 'react'

import { useLocation } from 'react-router-dom'

const BackContact = ({title}) => {
    const location = useLocation()
  return (
    <div>
        <section className='back3'>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <h1>Contact Us</h1><br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Need To Get in Touch with us ? <br></br>
            Either fill out the form with your inquiry or <br></br>
            Find the <a href="jagrook.worker@gmail.com"> Jagrook email id </a> you'd like to contact. </p>
   <br /> <br />
        </section> 
        <div className="margin"> 
        </div>
    </div>
  )
}

export default BackContact