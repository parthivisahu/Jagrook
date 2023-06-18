import React from 'react'

import { useLocation } from 'react-router-dom'

const BackSchemes = ({title}) => {
    const location = useLocation()
  return (
    <div>
        <section className='back4'>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <h1>Govt.Schemes </h1><br></br>
            <br></br>
            <br></br>
            <br></br>

            <p> The project is aimed at creating awareness about the government schemes<br></br>
            for cleanliness workers in Bhopal and Indore has helped us create a <br></br>
            platform for educating the workers about their entitlements and rights. <br></br>
            The project's primary objective was to educate the workers about their<br></br>
            rights and the benefits provided by the government, which they were <br></br>
            previously unaware of. The team carried out extensive research and <br></br>
            conducted various awareness campaigns to achieve this objective.
</p>

   <br /> <br />
        </section> 
        <div className="margin"> 
        </div>
    </div>
  )
}

export default BackSchemes