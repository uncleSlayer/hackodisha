import React from "react";
import './footer_style.css'
import github from './github-4.png'

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="contact-me">
        <h2>Contributors:</h2>
        <h3> Gaurav Verma    Prithwiraj Mohanty    Samyak Mishra    Siddhant Ota</h3>
        <p>Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
      </div>
      <div className="bottom-container">
        <a href="https://github.com/uncleSlayer/hackodisha">GitHub Repository</a>
        <a className="footer-link1" href=""><span className="sp1">Prithwiraj Mohanty</span></a>
        <a className="footer-link2" href="">Gaurav Vermar</a>
        <a className="footer-link3" href="">Samyak Mishra</a>
        <a className="footer-link3" href="">Siddhant Ota </a>
        <p>© Copyrights: The Local Lane</p>
      </div> */}

      <div className="footer-content">
        <h3>The Local Lane</h3>
        <p>Local Lane - Empowering local businesses, one click at a time.</p>
        <p>
          <a href="https://github.com/ITER-SIH/Team-54">
            Want to contribute ?
            <img className="github" src={github} />
          </a>
        </p>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2023. designed by <span><a href="https://github.com/Gaurav07076">Gaurav,
        </a></span><span><a href="https://github.com/samyak269"> Samyak & </a></span><span><a
          href="https://github.com/The-Prithwiraj06">Prithwiraj. </a></span>
          <span><a href="https://github.com/uncleSlayer">Siddhant </a></span></p>
        
      </div>

    </div >
  )

}
export default Footer