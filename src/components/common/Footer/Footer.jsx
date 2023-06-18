import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h2>JAGROOK</h2>
            <span>Helping workers around the cities of Indore and Bhopal.</span>
            <p>A platform to provide information about different schemes.</p>

            <a href=" "> <i className='fab fa-facebook-f icon'></i></a>
            <a href="mailto:jagrook.worker@gmail.com" ><i class="fa-sharp fa-solid fa-envelope"></i></a>
            <a href="https://instagram.com/project_jagrook?igshid=ZGUzMzM3NWJiOQ=="><i className='fab fa-instagram icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Schemes</li>
              <li>Team</li>
              <li>Gallery</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have any Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Vellore Institute Of Technology, Bhopal
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                12345678910
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                jagrook.worker@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This webpage is made by Parthivi 
        </p>
      </div>
    </>
  )
}

export default Footer