import React from 'react'
import '../../index.css' 
import './hero.css'


const Hero = () => {
  return (
    <div className="hero_container">
        <div className="relative">
        <div id="panel1" className="section1 flex">
            <p className="header">Lorem ipsum dolor sit, amet Dignissimos, optio?</p>
            <p className="subtxt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta ipsam odit qui quaerat expedita provident fuga vitae, minima ipsum quia?</p>
        </div>
        </div>
        
        <div id="panel2" className="section2">
          <div className="flex banertxt_container">
              <div className="banertxt_subcontainer">
                  <div className="header2">Morem tsum dolor sit?</div>
                  <div className="subtext2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis dicta velit doloremque perspiciatis illo fuga ipsum ut nemo! Quae perferendis dolorum eius nisi natus error blanditiis aut nam dolore eius nisi natus error blanditiis aut nam!mque perspiciatis illo fuga ipsum ut nemo! Qulor sit amet consectetur adipisicing
                  amet consectetur adipisicin.
                  </div>
              </div>
              <div className="dividerthin_V"></div>
              <div className="banertxt_subcontainer">
                  <div className="header2"></div>
                  <div className="subtext2"></div>
              </div>
          </div>
        </div>
        <div className="dividerthick_H"></div>
    </div>
  )
}

export default Hero