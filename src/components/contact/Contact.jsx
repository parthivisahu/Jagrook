import React from "react"
import BackContact from "../common/back/BackContact"
import "./contact.css"
import logo from "https://github.com/parthivisahu/Jagrook/blob/de4803d2b94f7f4eaada2fea59a9bd58dff449fd/src/img/sanitation-worker.jpg"
const Contact = () => {
  
  return (
    <>
      <BackContact title='Contact us' />
      
      <section className='contacts padding'>
    
        <div className='container shadow flexSB'>
     
          <div className='left row'>
           <img  className="imgco" src={logo} alt=" " />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat.</p>

            <div className='items grid2'>
             
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> jagrook.worker@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
