import React from 'react'
import './BodyHomeMoreCmt.css'
import AvatarCmt from '../Assets/Images/avatar-cmt.png'

function BodyHomeMoreCmt() {
    return (
        <div className="bodyHomeMovie-more-right-cmt-item">
            <div className="bodyHomeMovie-more-right-cmt-item-avatar">
                <img src={AvatarCmt}/>
            </div>

            <div className="bodyHomeMovie-more-right-cmt-item-content">
                <div className="bodyHomeMovie-more-right-cmt-item-content-top">
                    <div className="bodyHomeMovie-more-right-cmt-item-content-top-intro">
                        <p className="bodyHomeMovie-more-right-cmt-item-content-top-intro-name">Ronald Richards</p>

                        <p className="bodyHomeMovie-more-right-cmt-item-content-top-intro-status">(Đã xem phim)</p>
                    </div>

                    <div className="bodyHomeMovie-more-right-cmt-item-content-top-star">
                        <i className="bodyHomeMovie-more-right-cmt-item-content-top-star-icon fas fa-star"></i>
                        <i className="bodyHomeMovie-more-right-cmt-item-content-top-star-icon fas fa-star"></i>
                        <i className="bodyHomeMovie-more-right-cmt-item-content-top-star-icon far fa-star"></i>
                        <i className="bodyHomeMovie-more-right-cmt-item-content-top-star-icon far fa-star"></i>
                        <i className="bodyHomeMovie-more-right-cmt-item-content-top-star-icon far fa-star"></i>
                    </div>
                </div>

                <div className="bodyHomeMovie-more-right-cmt-item-content-line">

                </div>

                <p className="bodyHomeMovie-more-right-cmt-item-content-desc">
                teksturnya ngga sekentel day creamnya jadi setelah di pake di wajah ngga terasa berat gitu, ini ngelembab in banget sih pas di malem hari, apalagi yang ruangnya di AC, besok paginya kulit terasa lebih halus dan masih terasa lembab dan kenyel gitu. Oiya jangan mengharap kan jadi putih ya sesudah pake ini karena cream ini ngga bikin putih tapi untuk mencerahkan biar ngga kusam.
                </p>

                <p className="bodyHomeMovie-more-right-cmt-item-content-time">Đánh giá vào 3 tháng trước</p>
            </div>
        </div>
    )
}

export default BodyHomeMoreCmt
