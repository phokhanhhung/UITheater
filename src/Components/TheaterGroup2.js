import React from 'react';
import './TheaterGroup2.css';
import fb from '../Assets/Images/facebook.png';
import theater from '../Assets/Images/Rectangle 406.png';

function TheaterGroup2() {
  return (
    <div className="theaterGroup2">
      <div className="theaterGroup2__infos">
        <h1>UITHEATER GÒ VẤP</h1>
        <div className="theaterGroup2__address theaterGroup2__info">
          <i className="fas fa-map-marker-alt"></i>
          <p>Địa chỉ: 64/15 Nguyên Hồng, Phường 1, Quận Gò Vấp</p>
        </div>
        <div className="theaterGroup2__hotline theaterGroup2__info">
          <i className="fas fa-phone-alt"></i>
          <p>Hotline: +84 (273) 730 8882</p>
        </div>
        <div className="theaterGroup2__link theaterGroup2__info">
          <img src={fb} alt="Facebook" />
          <p>https://www.facebook.com/Dannnnnnnnn1601</p>
        </div>      
      </div>
      <img src={theater} alt="Movie Theater" />
    </div>
  )
}

export default TheaterGroup2