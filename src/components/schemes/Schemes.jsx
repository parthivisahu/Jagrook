import React from 'react'
import SchemesCard from './SchemesCard'
import OnlineSchemes from './OnlineSchemes'
import BackSchemes from '../common/back/BackSchemes'
const Schemes = () => {
  return (
    <div>
        <BackSchemes title={"Govt. Schemes"} />
        <SchemesCard />
        <OnlineSchemes />
       <br></br>
       <br></br>

    </div>
  )
}

export default Schemes