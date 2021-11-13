import React, { useState } from 'react';
import './BuyTicket.css';
import aladdin_bg from '../Assets/Images/aladdin-bg.png';
import viettelPay from '../Assets/Images/viettelpay-logo 1.png';
import momo from '../Assets/Images/MoMo_Logo 1.png';
import zaloPay from '../Assets/Images/zaloPay.png';
import cards from '../Assets/Images/cards.png';
import card from '../Assets/Images/card.png';
import visa from '../Assets/Images/visa.png';
import mastercard from '../Assets/Images/Master-Card-icon 1.png';
import jbc from '../Assets/Images/JCB_logo 1.png';
import aladdin from '../Assets/Images/aladdin-12.png';

function BuyTicket() {

  const [isTick,setIsTick] = useState(true);

  return (
    <div className="buyTicket__background-color1">
      <div className="buyTicket__background-img">
        <div className="buyTicket__background-color2">
          <div className="buyTicket">
            <div className="buyTicket__progress-wrap">
              <h1>ĐẶT VÉ ONLINE</h1>
              <div className="buyTicket__progress">
                <div className="buyTicket__progress-items">
                  <div className="buyTicket__progress-item">
                    <p>Đăng nhập</p>
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="buyTicket__progress-item">
                    <p>Chọn phim</p>
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="buyTicket__progress-item">
                    <p>Chọn suất chiếu, chỗ ngồi</p>
                    { 
                      /*isTick 
                      ? <i className="fas fa-check"></i> 
                      : */
                      <div className="buyTicket__progress-tick"></div>
                    }
                  </div>
                  <div className="buyTicket__progress-item">
                    <p>Thanh toán</p>
                    { 
                      /*isTick 
                      ? <i className="fas fa-check"></i>
                      :*/
                      <div className="buyTicket__progress-tick"></div>
                    }
                  </div>
                </div>
                <div className="buyTicket__progress-line"></div>
              </div>
            </div>

            <div className="buyTicket__main">
              <div className="buyTicket__details">
                <div className="buyTicket__details-header">
                  <img src={aladdin_bg} alt="Poster" />
                  <div className="buyTicket__details-movie">
                    <div className="buyTicket__details-rate">
                      {Array(5).fill().map((_, index) => (
                        <i key={index} className="fas fa-star"></i>
                      ))}
                    </div>
                    <div className="buyTicket__details-title buyTicket__detail-movie">
                      <h1>ALLADIN</h1><span>13</span>
                    </div>
                    <p>Tâm lí/Tình cảm</p>
                    <div className="buyTicket__details-duration buyTicket__detail-movie">
                      <p>Thời lượng:</p><span>120 phút</span>
                    </div>
                    <div className="buyTicket__details-director buyTicket__detail-movie">
                      <p>Đạo diễn:</p><span>Damien Chazelle</span>
                    </div>
                    <div className="buyTicket__details-actors buyTicket__detail-movie">
                      <p>Diễn viên:</p><span>Jenny Wilson, Guy Hawkins, Floyd Miles, Leslie Alexander... </span>
                    </div>
                  </div>
                </div>

                <div className="buyTicket__showtime">
                  <h4>Chọn suất chiếu</h4>
                  <div className="buyTicket__showtime-details">
                    <div className="buyTicket__showtime-theater buyTicket__showtime-detail">
                      <p>Chọn rạp</p>
                      <div className="buyTicket__showtime-choose">
                        <p>UITheater Sinh Viên</p>
                        <i className="fas fa-sort-down"></i>
                      </div>
                    </div>

                    <div className="buyTicket__showtime-date buyTicket__showtime-detail">
                      <p>Chọn ngày</p>
                      <div className="buyTicket__showtime-date-wrapper">
                        {Array(7).fill().map((_, index) => (
                          <div key={index} className="buyTicket__showtime-date-block">
                            <p>Tháng 11</p>
                            <p>01</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="buyTicket__showtime-time buyTicket__showtime-detail">
                      <p>Chọn giờ</p>
                      <div className="buyTicket__showtime-time-wrapper">
                        {Array(5).fill().map((_, index) => (
                          <div key={index} className="buyTicket__showtime-time-block">
                            19:30
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buyTicket__position">
                  <h4 className="buyTicket__position-title">Chọn chỗ ngồi</h4>
                  <div className="buyTicket__position-screen"></div>
                  <h3>SCREEN</h3>
                  <div className="buyTicket__position-place">
                    <div className="buyTicket__position-alphabet">
                      {Array(10).fill().map((_, index) => (
                        <div key={index}>{String.fromCharCode(index+65)}</div>
                      ))}
                    </div>

                    <div className="buyTicket__position-seats">
                      {Array(60).fill().map((_, index) => (
                        <div key={index} className="buyTicket__position-seat" style={{width: (100/6)+"%"}}>
                          <div></div>
                          <div></div>
                        </div>
                      ))}
                    </div>

                    <div className="buyTicket__position-seats buyTicket__position-seats-center">
                      {Array(120).fill().map((_, index) => (
                        <div key={index} className="buyTicket__position-seat" style={{width: (100/12)+"%"}}>
                          <div></div>
                          <div></div>
                        </div>
                      ))}
                    </div>

                    <div className="buyTicket__position-seats">
                      {Array(60).fill().map((_, index) => (
                        <div key={index} className="buyTicket__position-seat" style={{width: (100/6)+"%"}}>
                          <div></div>
                          <div></div>
                        </div>
                      ))}
                    </div>

                    <div className="buyTicket__position-alphabet">
                      {Array(10).fill().map((_, index) => (
                        <div key={index}>{String.fromCharCode(index+65)}</div>
                      ))}
                    </div>
                  </div>

                  <div className="buyTicket__position-notes">
                    {['Đã chọn', 'Ghế trống', 'Hết chỗ'].map((item, index) => (
                      <div key={index} className="buyTicket__position-note">
                        <div className="buyTicket__position-seat">
                          <div style={{backgroundColor: (item==="Đã chọn" && "#67A3AA") || (item==="Ghế trống" && "#49526D") || (item==="Hết chỗ" && "#C0556F")}}></div>
                          <div style={{backgroundColor: (item==="Đã chọn" && "#67A3AA") || (item==="Ghế trống" && "#49526D") || (item==="Hết chỗ" && "#C0556F")}}></div>
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="buyTicket__payment">
                  <h4>Chọn hình thức thanh toán</h4>
                  <div className="buyTicket__payment-methods">
                    <div className="buyTicket__payment-method">
                      <input id="radio-method1" type="radio" name="payment" value="ViettelPay" /> 
                      <label htmlFor="radio-method1" className="buyTicket__payment-text">
                        <img src={viettelPay} alt="Logo_method"/>
                        <p>Thanh toán bằng ví ViettelPay</p>
                      </label>
                    </div>
                    
                    <div className="buyTicket__payment-method">
                      <input id="radio-method2" type="radio" name="payment" value="Momo" />  
                      <label htmlFor="radio-method2" className="buyTicket__payment-text">
                        <img src={momo} alt="Logo_method"/>
                        <p>Thanh toán bằng ví Momo</p>
                      </label>
                    </div>
                    
                    <div className="buyTicket__payment-method">
                      <input id="radio-method3" type="radio" name="payment" value="ZaloPay" />
                      <label htmlFor="radio-method3" className="buyTicket__payment-text">
                        <img src={zaloPay} alt="Logo_method"/>
                        <p>Thanh toán bằng ví ZaloPay</p>
                      </label>
                    </div>
                    
                    <div className="buyTicket__payment-method">
                      <input id="radio-method4" type="radio" name="payment" value="Internet Banking" />
                      <label htmlFor="radio-method4" className="buyTicket__payment-text">
                        <img src={cards} alt="Logo_method"/>
                        <p>Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)</p>
                      </label>
                    </div>
                    
                    <div className="buyTicket__payment-method">
                      <input id="radio-method5" type="radio" name="payment" value="Visa, Master, JCB" /> 
                      <label htmlFor="radio-method5" className="buyTicket__payment-text">
                        <img src={card} alt="Logo_method"/>
                        <p>
                          Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                          
                        </p>
                      </label>  
                    </div>
                    <div className="buyTicket__payment-cards">
                      <img src={visa} alt="Logo_method"/>
                      <img src={mastercard} alt="Logo_method"/>
                      <img src={jbc} alt="Logo_method"/>
                    </div>
                  </div>
                </div>

                <div className="buyTicket__discount">
                  <h4>Ưu đãi, giảm giá</h4>
                  <input type="text" placeholder="Nhập mã ưu đãi, giảm giá" />
                  <button>THANH TOÁN</button>
                </div>
              </div>

              <div className="buyTicket__ticket">
                <div className="buyTicket__ticket-half-circle-top-wrap">
                  <div className="buyTicket__ticket-half-circle-top"></div>
                </div>

                <div className="buyTicket__ticket-half-circle-bottom-wrap">
                  <div className="buyTicket__ticket-half-circle-bottom"></div>
                </div>
                
                <div className="buyTicket__ticket-userinfo">
                  <div className="buyTicket__ticket-username">
                    <p>Người đặt</p>
                    <h4>NGUYỄN DUY AN</h4>
                  </div>
                  <div className="buyTicket__ticket-phone">
                    <p>SĐT</p>
                    <h4>0987678978</h4>
                  </div>
                </div>

                <hr className="buyTicket__ticket-dotted" />

                <div className="buyTicket__ticket-infos">
                  <img src={aladdin} alt="Poster" />
                  <div className="buyTicket__ticket-info">
                    <div className="buyTicket__ticket-info-showtime">
                      <p>Rạp</p>
                      <h4>UITheater Gò Vấp</h4>
                    </div>
                    <div className="buyTicket__ticket-info-showtime">
                      <p>Phim</p>
                      <h4>Aladdin</h4>
                    </div>
                    <div className="buyTicket__ticket-info-showtime">
                      <p>Suất chiếu</p>
                      <h4>19:30 01/11/2021</h4>
                    </div>
                  </div>
                </div>
                  
                <div className="buyTicket__ticket-cost">
                  <div className="buyTicket__ticket-cost-field">
                    <p>Số vé</p>
                    <p>3</p>
                  </div>
                  <div className="buyTicket__ticket-cost-field">
                    <p>Đơn giá</p>
                    <p>45 000đ</p>
                  </div>
                  <div className="buyTicket__ticket-cost-field">
                    <p>Giảm giá</p>
                    <p>0đ</p>
                  </div>
                </div>

                <div className="buyTicket__ticket-line"></div>

                <div className="buyTicket__ticket-total">
                  <p>Tổng tiền</p>
                  <h2>135 000đ</h2>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </div>
    </div>  
  )
}

export default BuyTicket
