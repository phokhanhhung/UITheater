import React from 'react';
import './Service.css';

function Service({img, title, text}) {
  return (
    <div className="service">
      <img src={img} alt="service image" />
      <div className="service__info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Service
