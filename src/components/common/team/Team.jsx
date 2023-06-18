import React from "react"
import TeamCard from "./TeamCard"
import "./team.css"
import "../../about/about.css"
import BackTeam from "../back/BackTeam"


const Team = () => {
  return (
    <>
      <BackTeam title='Team' />
      <h1 className="h1t">Our Team</h1>
      <section className='team padding'>
        <div className='container grid'>
          
          <TeamCard />
        </div>
      </section>
      
    </>
  )
}

export default Team