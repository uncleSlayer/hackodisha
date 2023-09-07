import React from 'react'

import '../../index.css'
import './cardcarousel.css'

function cardcarousel() {
  return (
    
    <ul className="product-list">
      <li className="product-item">
          <a href="https://www.cupcom.com.br" target="_blank" className="product-link">
              <figure className="product-info">
                  <div className="product-info-img">
                      <img src="https://i.ibb.co/2Pvg3yh/images.jpg" alt="description image"></img>
                  </div>
                  <figcaption className="product-info-description">
                      <h2 className="title">Product name</h2>
                      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, placerat sed rutrum non, bibendum sed ante. Cras at fringilla justo. Duis vitae viverra diam, eget vehicula dolor.</p>
                      <ul className="star-ranking">
                          <li><img src="https://i.ibb.co/2kW5mnM/star.png"></img>
                          </li>
                          <li><img src="https://i.ibb.co/2kW5mnM/star.png"></img>
                          </li>
                          <li><img src="https://i.ibb.co/2kW5mnM/star.png"></img>
                          </li>
                          <li><img src="https://i.ibb.co/2kW5mnM/star.png"></img>
                          </li>
                          <li><img src="https://i.ibb.co/TwYYb93/star-1.png"></img>
                          </li>
                          
                      </ul>
                  </figcaption>
                  <div className="price-box">
                      <div className="price">
                          <div>
                              <del>R$300,00</del>
                              <ins className="d-block">R$180,00</ins>
                          </div>
                          <span className="price-info">4x de R$ 49,97</span>
                      </div>
                      <button className="btn btn-buy">Buy now <i className="fas fa-arrow-right"></i></button>
                  </div>
                  
              </figure>
          </a>
      </li>
      </ul>
  )
}

export default cardcarousel