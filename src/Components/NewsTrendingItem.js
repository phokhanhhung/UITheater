import React from 'react'
import './NewsTrendingItem.css'

function NewsTrendingItem({src, title, time, viewer}) {
    return (
        <div className="news-trending-item">
            <img className="news-trending-item-img" src={src} alt="img" />
            <p className="news-trending-item-title">{title}</p>
            <div className="news-trending-item-bottom">
                <p className="news-trending-item-bottom-time">{time}</p>
                <p className="news-trending-item-bottom-viewer">
                    <i className="news-trending-item-bottom-viewer-icon fas fa-eye"></i>
                    {viewer}
                </p>
            </div>
        </div>
    )
}

export default NewsTrendingItem
