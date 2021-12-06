import React from 'react';
import './TheaterPrice.css';
import theater from '../Assets/Images/TheaterPrice-theater.png';
import ticket from '../Assets/Images/Bang gia ve Quoc Thanh 2D 102017 2.png';

let i = 0;

function TheaterPrice() {
  if (i === 0) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    i++;
  }
  return (
    <div className="cinema__ticket">
      <div className="cinema__ticket-container">
        <div className="cinema__ticket-header">
          <h1>GIÁ VÉ</h1>
          <div className="cinema__ticket-header-choose">
            Chọn rạp
            <span className="cinema__ticket-header-choose-cinema">UITheater Sinh Viên
              <i className="fas fa-sort-down"></i>
            </span>
          </div>
            
          <div className="cinema__ticket-header-info">
            <img src={theater} alt="Hình rạp phim UITheater" />
            <div className="cinema__ticket-header-info-muc">
              <h2>RẠP UITheater Sinh Viên</h2>
              <div className="cinema__ticket-header-info-muc-line">
                <i className="cinema__ticket-header-info-muc-line-map1 fas fa-map-marker-alt"></i>
                Địa chỉ 64/15 Nguyên Hồng Phường 1 Gò Vấp
              </div>
              <div className="cinema__ticket-header-info-muc-line">
                <i className="cinema__ticket-header-info-muc-line-map2 fas fa-phone-square-alt"></i>
                Hotline: +84 (273) 730 8882
              </div>
              <div className="cinema__ticket-header-info-muc-line">
                <i className="cinema__ticket-header-info-muc-line-map3 fab fa-facebook"></i>
                https://www.facebook.com/Dannnnnnnnn1601
              </div>
            </div>
          </div>
        </div>
          
        <div className="cinema__ticket-body">
          <div className="cinema__ticket-background">
            <div className="cinema__ticket-text">
              <i className="cinema__ticket-text-icon fas fa-money-bill-wave"></i>
              BẢNG GIÁ TẠI RẠP UITheater Sinh Viên
              <hr width="30%" size="2px" />
            </div>
            <div className="cinema__ticket-pic">
              <img src={ticket} alt="Bảng giá vé 2D" />
              <img src={ticket} alt="Bảng giá vé 3D" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheaterPrice
