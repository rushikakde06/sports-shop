import React from 'react'
import '../Componets/Sportapp.css'
import constdata from '../Shared/consdata'


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla vel molestie est.</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://in.search.yahoo.com/search?fr=mcafee&type=E211IN714G0&p=whatsapp+web" target='blank'><img width={50} src={constdata.whatsapp} alt="" /></a>
              <a href="https://www.facebook.com/?ref=homescreenpwa" target='blank'><img src={constdata.facebook} alt="" /></a>
              <a href="https://www.instagram.com/"><img src={constdata.insta} alt="" /></a>
              <a href="https://www.linkedin.com/uas/login-submit"><img src={constdata.linkedin} alt="" target='blank' /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h5>&copy; 2023 Your Company. All rights reserved. developed by:Rushikesh G Kakde</h5>
      </div>
    </footer>
  )
}

export default Footer
