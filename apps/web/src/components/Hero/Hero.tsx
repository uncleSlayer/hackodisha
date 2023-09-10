import React from 'react'
import '../../index.css' 
import './hero.css'


const Hero = () => {
  return (
    <div className="hero_container">
        <div className="relative">
        <div id="panel1" className="section1 flex">
            <p className="header">Welcome to the Local Lane</p>
            <p className="subtxt">In the rapidly evolving digital age, local traders and vendors in India face a significant challenge – the shift to online markets. While e-commerce presents new opportunities, it also poses a threat to the rich culture and heritage of India. To address this challenge and protect the hard work of local artisans and traders, we have <b>The Local Lane</b></p>
        </div>
        </div>
        
        <div id="panel2" className="section2">
          <div className="flex banertxt_container">
              <div className="banertxt_subcontainer">
                  <div className="header2">What is Local Lane?</div>
                  <div className="subtext2">"Local Lane" is a purpose-driven e-commerce website that empowers local traders and safeguards the cultural heritage of India. Our platform offers a user-friendly solution for vendors to showcase and sell their products online, and for users to discover and purchase these unique items. Here are some key features and solutions:
<ul >
<li className='hero-list'>Vendor Empowerment</li>

<li className='hero-list'>User-Friendly Shopping</li>

<li className='hero-list'>Safeguarding Heritage</li>
</ul>

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