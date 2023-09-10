import React  from "react";
import './footer_style.css'

const Footer=()=>{
    return (
     <div>
            <div className="contact-me">
          <h2>Contributors:</h2>
          <h3> Name 1,  Name 2, Name 3, Name 4</h3>
          <p>Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
          
    
         </div>
        <div className="bottom-container">
            <a href="">GitHub Repository</a>
        {/* <a className="footer-link1" href=""><span className="sp1">Prithwiraj Mohanty</span></a>
        <a className="footer-link2" href="">Gaurav Vermar</a>
        <a className="footer-link3" href="">Samyak Mishra</a>
        <a className="footer-link3" href="">Siddhant Ota </a> */}
        <p>© Copyrights: The Local Lane</p>
      </div>
      </div>
    )

}
export default Footer