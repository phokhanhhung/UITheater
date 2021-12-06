import React from 'react'
import './NewsLatestItem.css'
import { Link } from 'react-router-dom'
import backgroundNewsItem7 from '../Assets/Images/news-item-background.png'
import backgroundNewsItem1 from '../Assets/Images/poster-trailer.png'
import backgroundNewsItem2 from '../Assets/Images/Raya_and_the_Last_Dragon_logo.png'
import backgroundNewsItem3 from '../Assets/Images/news-item-background.png'
import backgroundNewsItem4 from '../Assets/Images/searching-poster-2.png'
import backgroundNewsItem5 from '../Assets/Images/service-opera.png'
import backgroundNewsItem6 from '../Assets/Images/posterrayawallpaper.png'

function NewsLatestItem({title, desc, viewer, time, index}) {
    
    const listImages = [backgroundNewsItem7, 
                        backgroundNewsItem1,
                        backgroundNewsItem2, 
                        backgroundNewsItem3,
                        backgroundNewsItem4,
                        backgroundNewsItem5, 
                        backgroundNewsItem6,]

    return (
        <div className="news-latest-item">
                <img src={listImages[index]} alt="img" className="news-latest-item-img" />
                <Link to="/news-item/" index={index}>
                    <div className="news-latest-item-wrapper">
                        <p className="news-latest-item-title">{title}</p>
                        <p className="news-latest-item-desc">{desc}</p>
                        <div className="news-latest-item-bottom">
                            <p className="news-latest-item-viewer">
                                <i className="news-latest-item-viewer-icon fas fa-eye"></i>
                                {viewer}
                            </p>
                            <p className="news-latest-item-viewer-time">{time}</p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}

export default NewsLatestItem
