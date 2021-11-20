import React from 'react'
import './Contact.css'

import AdsIcon from '../Assets/Images/ads-icon.png'
import Contact1 from '../Assets/Images/Contact-1.png'
import Contact2 from '../Assets/Images/Contact-2.png'
import CustomerIcon from '../Assets/Images/customer-icon.png'
import TradeIcon from '../Assets/Images/trade-icon.png'

function Contact() {
    return (
        <div>
            <div className="contact-container">
                <div className="contact-container__top">
                    <img className="top__header-image" src={Contact1} alt="" />
                    <h2 className="top__header">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    <div className="top__contact-wrapper">
                        <img className="contact-wrapper__image" src={Contact2} alt="" />
                        <form className="contact-wrapper__form">
                            <h3 className="form__header">GỬI NỘI DUNG LIÊN HỆ</h3>
                            <input className="form__input form__input--name" type="text" placeholder="Họ & tên" />
                            <input className="form__input form__input--telephone" type="text" placeholder="Số điện thoại" />
                            <input className="form__input form__input--email" type="email" placeholder="Email" />
                            <textarea className="form__input form__input--content" placeholder="Nội dung" ></textarea>
                            <input className="form__submit" type="submit" value="Gửi" />
                        </form>
                    </div>
                </div>

                <div className="contact-container__bottom">
                    <div className="bottom__section">
                        <div className="section__header-image-wrapper">
                            <img src={CustomerIcon} alt="" />
                        </div>
                        <h3 className="section__header">DỊCH VỤ KHÁCH HÀNG</h3>
                        <ul className="section__content">
                            <li><b>Địa chỉ: </b>Khu phố 6, phường Linh Trung, TP. Thủ Đức, TPHCM</li>
                            <li><b>Hotline: </b>1900 1009</li>
                            <li><b>Giờ làm việc: </b>8:00 - 22:00</li>
                            <li><b>Email hỗ trợ: </b>hoidap@uitheater.vn</li>
                        </ul>
                    </div>

                    <div className="bottom__section">
                        <div className="section__header-image-wrapper">
                            <img src={AdsIcon} alt="" />
                        </div>
                        <h3 className="section__header">LIÊN HỆ QUẢNG CÁO, SỰ KIỆN</h3>
                        <ul className="section__content">
                            <li><b>Phòng kinh doanh: </b>0909107188</li>
                            <li><b>Ext: </b>278 (Miss Phương Thảo)</li>
                            <li><b>Hotline: </b>0980 0000</li>
                            <li><b>Email: </b>ad.uitheater@uit.net</li>
                        </ul>
                    </div>

                    <div className="bottom__section">
                        <div className="section__header-image-wrapper">
                            <img src={TradeIcon} alt="" />
                        </div>
                        <h3 className="section__header">LIÊN HỆ TRUYỀN THÔNG & TÀI TRỢ</h3>
                        <ul className="section__content">
                            <li><b>Phòng truyền thông: </b>0909107188</li>
                            <li><b>Ext: </b>278 (Mr. Phó Khánh Hưng)</li>
                            <li><b>Hotline: </b>0980 0000</li>
                            <li><b>Email: </b>pr.uitheater@uit.net</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
