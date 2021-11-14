import React from 'react'
import './NewsTrending.css'

import NewsTrendingBottom from './NewsTrendingBottom'

function NewsTrending() {
    return (
        <div className="news-trending">
            <div className="news-trending-top">
                <p className="news-trending-top-title">Trending</p>
                <div className="news-trending-top-more">
                    <a href="/" className="news-trending-top-more-content">Xem thêm</a>
                    <i className="news-trending-top-more-icon fas fa-chevron-right"></i>
                </div>
            </div>

            <NewsTrendingBottom />
        </div>
    )
}

export default NewsTrending
