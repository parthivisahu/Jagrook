import React from 'react'
import { useLocation } from 'react-router-dom'

const Back = ({title}) => {
    const location = useLocation()
  return (
    <div>
        <section className='back'>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <br /><h1>{title}</h1><br /><br />
            <h3>Our objective is to educate the local cleanliness community of Bhopal and </h3>
            <h3>Indore about their legal rights and government-sponsored welfare programs.</h3>
            <h3>We are focused on bridging the gap between the government schemes</h3>
            <h3>and the community.<br /> <br /><br /> Lack of awareness is the reason behind many problems</h3>
            <h3>faced by the community. We want them to understand that they can </h3>
            <h3> legitimately live in this society and enjoy the amenities as everyone else.</h3>
        </section> 
        <div className="margin"> 
        </div>
    </div>
  )
}

export default Back