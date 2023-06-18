import React from 'react'
import { coursesCard } from '../../../dummydata'
import Title from '../title/Title'

const HAbout = () => {
  return (
    <div>
        <section className='homeAbout'>
          <div className='container'>
            <Title title="Explore new Schemes" />
            <div className='coursesCard'>
              <div className="grid2">
                {coursesCard.slice(0,3).map((val)=>{
                  return(
                    <div className="items">
                      <div className="content flex">
                        <div className="left">
                          <div className="img">
                            <img src={val.cover} alt="" />
                            <br /><br />
                            <h1>{val.coursesName}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HAbout