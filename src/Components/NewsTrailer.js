import React from 'react'
import './NewsTrailer.css'
import NewsTrailerMovie from './NewsTrailerMovie'

function NewsTrailer() {
    return (
        <div className="news-trailer">
            <div className="news-trailer-top">
                <p className="news-trailer-top-title">Trailer</p>
                <div className="news-trailer-top-more">
                    <a href="/" className="news-trailer-top-more-content">Xem thêm</a>
                    <i className="news-trailer-top-more-icon fas fa-chevron-right"></i>
                </div>
            </div>

            <div className="news-trailer-body">
                <NewsTrailerMovie 
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="50%"
                    height="416"
                    widthCate="20%"
                    fontSizeName="36"
                />
                <NewsTrailerMovie 
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="50%"
                    height="416"
                    widthCate="20%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
            </div>
        </div>
    )
}

export default NewsTrailer
