import React from 'react'

import { useLocation } from 'react-router-dom'

const BackSupport = ({title}) => {
    const location = useLocation()
  return (
    <div>
        <section className='back2'>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <h1>Let's Support</h1><br></br>
        
        
        <p>We urge you all to step up and assist us in our effort  to <br></br>
        raise awareness amongst them about their rights and the benefits available <br></br>
        through the programs established for their benefit. We need you to educate <br></br>
        them on the need of utilizing protective gear and measures, as well as on<br></br>
         the health issues they confront and how to prevent them. With a single<br></br>
          little step, you may assist a large number of such cleaning employees.<br></br>
           And there are many ways you can assist, such as joining us, charitable<br></br>
            giving, posting training or blogging on the subject, interacting with<br></br>
             and aiding the workers near you, and encouraging teenagers and <br></br>
             children to help them raise awareness. It is entirely up to you how <br></br>
             you choose to participate in this change and awareness journey.</p>
   <br /> <br />
        </section> 
        <div className="margin"> 
        </div>
    </div>
  )
}

export default BackSupport