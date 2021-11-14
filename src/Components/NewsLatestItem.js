import React from 'react'
import './NewsLatestItem.css'
import { Link } from 'react-router-dom'

function NewsLatestItem({src, title, desc, viewer, time}) {
    return (
        <div className="news-latest-item">
                <img src={src} alt="img" className="news-latest-item-img" />
                <Link to="/news-item/">
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
