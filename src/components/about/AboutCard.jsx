import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import "./about.css"
import worker from "https://github.com/parthivisahu/Jagrook/blob/5722b667ac1fd62bd4199096b511e661cb4e78c1/src/img/sanitation-worker.jpg"

const AboutCard = () => {
  return (
    <div>
    <section className='aboutHome'>
        <div className="container flexSB">
            <div className="left row">
                <img src={worker} alt="" />
            </div>
            <div className="right row">
            <div className="items">
            <Title subtitle="Helping Environment and it's workers" title="Our Motive" />
              {homeAbout.map((val) => (
                <div className='item  flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt=" " />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </div>
        
    </section>
    <AWrapper />
    </div>
  )
}

export default AboutCard
