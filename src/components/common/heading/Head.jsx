import React from 'react'
import logo from "https://github.com/parthivisahu/Jagrook/blob/6bc264f70d0e731ece01d60fc688e5f65a7263c0/src/img/logo_jagrook.png";
export const Head = () => {
  return (
    <div>
        <section className='head'>
            <div className='container flexSB'>
                <div className="logo"> 
                    <img src= {logo} alt=''/>
                </div>
                <div className="social">
                <a href="https://instagram.com/project_jagrook?igshid=ZGUzMzM3NWJiOQ=="><i className='fab fa-instagram icon'></i></a>
                   <a href='https://www.youtube.com/@pibindia'> <i className='fab fa-youtube icon'></i></a>
                    <a href="mailto:jagrook.worker@gmail.com" ><i className="fa-solid fa-envelope icon"></i></a>
                </div>
            </div>
        </section>
    </div>
  )
}
