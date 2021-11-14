import React from 'react'
import './NewsAds.css'

function NewsAds({src, name, title, viewer, time, desc1, desc2}) {
    return (
        <div className="news-ads" style={{backgroundImage: 'url(' + src + ')'}}>
            <div className="news-ads-left">
                <p className="news-ads-left-name">{name}</p>
                <p className="news-ads-left-title">{title}</p>
                <div className="news-ads-left-bottom">
                    <p className="news-ads-left-bottom-viewer">
                        <i className="news-ads-left-bottom-viewer-icon fas fa-eye"></i>
                        {viewer}
                    </p>
                    <p className="news-ads-left-bottom-time">{time}</p>
                </div>
            </div>

            <div className="news-ads-right">
                {desc1}
                <br />
                {desc2}
                <br />
                <a href="/" className="news-ads-right-more" alt="more-link">
                    Xem thêm
                    <i className="news-ads-right-more-icon fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    )
}

export default NewsAds
