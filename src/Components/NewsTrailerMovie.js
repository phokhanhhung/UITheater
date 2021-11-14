import React from 'react'
import './NewsTrailerMovie.css'

function NewsTrailerMovie({name, category, duration, width, height, widthCate, fontSizeName}) {
    const handleOpenTrailer = () => {
        const trailerMovie = document.querySelector('.bodyHomeMovie-more-trailer-movie')
        const trailer = document.querySelector('.bodyHomeMovie-more-trailer')
        const wrap = document.querySelector('.bodyHomeMovie-more-wrap')
        const more = document.querySelector('.bodyHomeMovie-more')
        
        more.style.display = 'block'
        trailer.style.display = 'block'
        trailerMovie.src = 'https://www.youtube.com/embed/0pdqf4P9MB8'
        wrap.style.display = 'none'
    }

    return (
        <div className="news-trailer-movie" style={{width:width, height:height + 'px'}} onClick={handleOpenTrailer}>
            <i className="news-trailer-movie-icon far fa-play-circle"></i>
            <div>
                <p className="news-trailer-movie-category" style={{width:widthCate}}>{category}</p>
                <div className="news-trailer-movie-intro">
                    <p className="news-trailer-movie-intro-name" style={{fontSize:fontSizeName + 'px'}}>{name}</p>
                    <p className="news-trailer-movie-intro-duration">{duration}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsTrailerMovie
