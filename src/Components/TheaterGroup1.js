import React from 'react';
import './TheaterGroup1.css';
import fb from '../Assets/Images/facebook.png';
import theater from '../Assets/Images/Rectangle 406.png';

function TheaterGroup1() {
  return (
    <div className="theaterGroup1">
      <img src={theater} alt="Movie Theater" />
      <div className="theaterGroup1__infos">
        <h1>UITHEATER GÒ VẤP</h1>
        <div className="theaterGroup1__address theaterGroup1__info">
          <i className="fas fa-map-marker-alt"></i>
          <p>Địa chỉ: 64/15 Nguyên Hồng, Phường 1, Quận Gò Vấp</p>
        </div>
        <div className="theaterGroup1__hotline theaterGroup1__info">
          <i className="fas fa-phone-alt"></i>
          <p>Hotline: +84 (273) 730 8882</p>
        </div>
        <div className="theaterGroup1__link theaterGroup1__info">
          <img src={fb} alt="Facebook" />
          <p>https://www.facebook.com/Dannnnnnnnn1601</p>
        </div>
      </div>
    </div>
  )
}

export default TheaterGroup1
