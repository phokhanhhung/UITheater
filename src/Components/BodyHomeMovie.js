import React, {forwardRef, useState} from 'react';
import './BodyHomeMovie.css';
import {Link} from 'react-router-dom';

function BodyHomeMovie({name, age, type, description, img, handleBuyTicket}, ref) {

  const handleClick = () => {
    const BodyHomeMore = document.querySelector('.bodyHomeMovie-more');

    BodyHomeMore.style.display = 'block';
  }

  return (
    <div className="bodyHomeMovie_wrap">
      <div 
        ref={ref}
        className="bodyHomeMovie" 
      >
        <img src={img} alt="#"/>

        <div className="bodyHomeMovie_infor">
          <h3>{name}</h3>
          <h4><span>{age}</span>{type}</h4>
          <p>{description}</p>
          <button className="bodyHomeMovie_buy"><Link to="/datve"><i className="fas fa-cart-arrow-down"></i>Mua vé</Link></button>
          <button className="bodyHomeMovie_more" onClick={handleClick}><i className="fas fa-exclamation-circle"></i>Xem thêm</button>
        </div>
      </div>
    </div>
    
  )
}

export default forwardRef(BodyHomeMovie)
