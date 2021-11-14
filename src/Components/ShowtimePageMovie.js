import React from 'react';
import './ShowtimePageMovie.css';
import wonderwoman from '../Assets/Images/woderwoman-12.png';

function ShowtimePageMovie() {
  return (
    <div className="showtimePageMovie">
      <img src={wonderwoman} alt="Poster" />
      <div className="showtimePageMovie__info">
        <div className="showtimePageMovie__info-background-color">
          <h4>WONDER WOMAN</h4>
          <span>13</span><span>Trẻ em/Phiêu lưu</span><br />
          <button><i className="fas fa-info-circle"></i>Xem thêm</button>
          <button><i className="fas fa-play"></i>Trailer</button>
          <div className="showtimePageMovie__info-line"></div>
          <div className="showtimePageMovie__info-times">
            {Array(5).fill().map((item, index) => (
              <div key={index} className="showtimePageMovie__info-time-block">
                <div className="showtimePageMovie__info-time">
                  17:30
                </div>
              </div>
            ))}
          </div>
          <button><i className="fas fa-cart-arrow-down"></i>Mua vé</button>
        </div>  
      </div>
    </div>
  )
}

export default ShowtimePageMovie
