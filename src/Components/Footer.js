import React from 'react';
import './Footer.css';
import ios from '../Assets/Images/app_store.png';
import android from '../Assets/Images/google_play.png';
import facebook from '../Assets/Images/facebook.png';
import twitter from '../Assets/Images/twitter.png';
import instar from '../Assets/Images/instagram.png';
import contact from '../Assets/Images/contact.svg';
import logo from '../Assets/Images/logo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_downloadWrap">
        <div className="footer_download">
          <div className="footer_flatform">
                <h3>UITheater đã có trên IOS & ANDROID</h3>
                <p>Tải ngay để có trải nghiệm tốt hơn trên thiết bị di động của bạn</p>
                <ul>
                    <li><img src={ios} alt="#" /></li>
                    <li><img src={android} alt="#" /></li>
                </ul>
          </div>
          <div className="footer_division"></div>
          <div className="footer_register">
            <h3>ĐĂNG KÝ ĐỂ NHẬN NGAY TIN MỚI TỪ UITheater</h3>
            <p>Bạn cứ yên tâm, chúng tôi không gửi spam chỉ gửi lịch chiếu phim mới và ưu đãi hot</p>
            <form>
              <input type="email" placeholder="Nhập địa chỉ mail của bạn" />
              <button type="submit">Đăng ký</button>
            </form>
             
          </div>
        </div>
      </div>
      

      <div className="footer_contact">
          <div className="footer_infor">
              <a href="#" target="_blank" className="logo"><img src={logo} alt="#" /></a>
              <h3>Công ty TNHH UITheater</h3>
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          </div>

          <div className="footer_media">
              <ul className="footer_moreInfor">
                  <li><a href="#" target="_blank">Về UITheater</a></li>
                  <li className="footer_media_division"></li>
                  <li><a href="#" target="_blank">Chính sách & quy định</a></li>
                  <li className="footer_media_division"></li>
                  <li><a href="#" target="_blank">Tuyển dụng</a></li>
                  <li className="footer_media_division"></li>
                  <li><a href="#" target="_blank">Liên hệ</a></li>
              </ul>
              <ul className="footer_social">
                  <li><a href="#" target="_blank"><img src={facebook} alt="#" /></a></li>
                  <li><a href="#" target="_blank"><img src={twitter} alt="#" /></a></li>
                  <li><a href="#" target="_blank"><img src={instar} alt="#" /></a></li>
              </ul>
              <p>Copyright ©2021 UITheater Cinemas. All rights reserved.</p>
          </div>

          <div className="footer_hotline">  
            <img src={contact} alt="#" />
            <div>
              <h3>TỔNG ĐÀI HỖ TRỢ</h3>
              <p>028 9876 5432</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
