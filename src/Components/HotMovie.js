import React from 'react'
import './HotMovie.css'

function HotMovie({src1, src2}) {
    return (
        <div className="hot-movie">
            <a href="/">
                <img className="hot-movie-num" src={src1} alt="movie num"/>
                <img className="hot-movie-img" src={src2} alt="movie img"/>
            </a>
        </div>
    )
}

export default HotMovie
