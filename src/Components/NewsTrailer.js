import React from 'react'
import './NewsTrailer.css'
import NewsTrailerMovie from './NewsTrailerMovie'

import posterTrailer from '../Assets/Images/poster-trailer.png'
import posterTrailer2 from '../Assets/Images/Raya_and_the_Last_Dragon_logo.png'
import posterTrailer3 from '../Assets/Images/news-ads-poster.png'
import posterTrailer4 from '../Assets/Images/searching-poster-2.png'
import posterTrailer5 from '../Assets/Images/service-opera.png'
import posterTrailer6 from '../Assets/Images/posterrayawallpaper.png'

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
                    src={posterTrailer}
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="50%"
                    height="416"
                    widthCate="20%"
                    fontSizeName="36"
                />
                <NewsTrailerMovie 
                    src={posterTrailer2}
                    name="Raya and the last Dragon"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="50%"
                    height="416"
                    widthCate="20%"
                    fontSizeName="36"
                />
                <NewsTrailerMovie 
                    src={posterTrailer3}
                    name="Hometown Cha-Cha-Cha"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    src={posterTrailer4}
                    name="Quan vương bất diệt"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    src={posterTrailer5}
                    name="Người bất tử"
                    category="Chính kịch/Giật gân"
                    duration="02:33"
                    width="25%"
                    height="208"
                    widthCate="40%"
                    fontSizeName="18"
                />
                <NewsTrailerMovie 
                    src={posterTrailer6}
                    name="Raya and the last Dragon"
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
