import React from 'react'
import Title from "../common/title/Title"
import { online } from '../../dummydata'
import { Link } from 'react-router-dom'
const OnlineSchemes = () => {
  return (
    <div>
        <section className='online'>
            <div className="container">
                <Title  title="See the following Govt. Schemes" />
                <div className="content grid2">
                    {online.map((val)=>(
                        <div className="box">
                            <div className="img">
                                <img src={val.cover} alt='' />
                                <Link to ={{pathname: "https://sbmurban.org/"}} target="_blank">
                            <img src={val.hoverCover} alt='' className='show' /></Link>
                            </div> <br></br><br/>
                            <Link to ={{pathname: "https://clc.gov.in/clc/acts-rules/child-labour-prohibition-and-regulation-act-1986#:~:text=It%20came%20on%20the%20Statute,1986%20(61%20of%201986).&text=An%20Act%20to%20prohibit%20the,children%20in%20certain%20other%20employments."}} target="_blank">     
                            <h1>{val.courseName}</h1></Link>
                            <Link to ={{pathname: "https://labour.gov.in/sites/default/files/wage_cell.pdf"}} target="_blank">
                            <span>{val.course}</span></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default OnlineSchemes