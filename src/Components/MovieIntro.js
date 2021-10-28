import React from 'react'
import movieIntroImg from '../Assets/Images/Raya_and_the_Last_Dragon_logo.png'
import './MovieIntro.css'

function MovieIntro() {
    return (
        <div className="movie-intro">
            <img src={movieIntroImg} className="movieIntroImg" alt="movieIntroImg" />
            <div className="movie-intro-rating">
                <p className="movie-intro-rating-content">TOP 1</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="movie-intro-desc">
                Raya và Rồng Thần Cuối Cùng kể về một vương quốc huyền bí có tên là Kumandra – vùng đất mà loài rồng và con người sống hòa thuận với nhau. Nhưng rồi một thế lực đen tối bỗng đe dọa bình yên nơi đây, loài rồng buộc phải hi sinh để cứu lấy loài người...
            </div>
            <div className="movie-intro-btn">
                <button className="movie-intro-btn-buy">Mua vé</button>
                <button className="movie-intro-btn-more">Xem thêm</button>
            </div>
        </div>    
    )
}

export default MovieIntro
