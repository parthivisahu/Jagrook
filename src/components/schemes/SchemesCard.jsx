import React from 'react'
import { coursesCard} from '../../dummydata'
import "./schemes.css"
import { Link } from 'react-router-dom'
const SchemesCard = () => {
  return (
    <div> 
         <h1 className='head1'>Government Schemes</h1> <br /><br/>
        <section className="coursesCard">
            <div className="container grid2">
                {coursesCard.map((val) => {
                    return(
                    <div className="items">
                        <div className="content flex">
                            <div className="left">
                                <div className="img">
                                <Link to ={{pathname: "https://nrega.nic.in/Nregahome/MGNREGA_new/Nrega_home.aspx "}} target="_blank"> <img src={val.cover} alt=""  />
                                    </Link>
                                     
                                </div>
                            </div>
                           
                        </div>
                        <div className="text">
                                <h1>{val.coursesName}</h1>
                        </div><br/>
                    </div>
                    
                    )

                })}
            </div>
        </section>
    </div>
  )
}

export default SchemesCard;