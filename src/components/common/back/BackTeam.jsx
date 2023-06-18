import React from 'react'

import { useLocation } from 'react-router-dom'

const BackTeam = ({title}) => {
    const location = useLocation()
  return (
    <div>
        <br></br>
        <section className='back3'>
            <h2>Home / {location.pathname.split("/")[1]}</h2><br></br>
            <h1>Let's Meet Our Team</h1><br></br><br></br><br></br>
            <p> Founded in 2022, Our Team consists of 8 students who came to know<br></br>  
            each other during an experiential learning programee and made this idea of<br></br>
            helping clenliness workers possible while observing the surroundings. <br></br>

            <br></br>
            </p>
            
   <br /> <br />
        </section> 
        <div className="margin"> 
        </div>
    </div>
  )
}

export default BackTeam