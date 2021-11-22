import React from 'react'
import './SearchingResultPage.css'
import { useState, useEffect } from 'react'

import SearchingPoster1 from '../Assets/Images/searching-poster-1.png'
import SearchingPoster2 from '../Assets/Images/searching-poster-2.png'
import SearchingResultImg from '../Assets/Images/searching-result.png'

function SearchingResultPage() {
    const [inputSearch, setInputSearch] = useState('')
    useEffect(() => {
        const inputSearch = document.querySelector('.search-input')
        setInputSearch(inputSearch.getAttribute('value'))
    })


    return (
        <div className="searchingResult-container">
            <div className="searchingResult">
                <img className="searchingResult__header-image" src={SearchingResultImg} alt=""/>
                <h2 className="searchingResult__header">KẾT QUẢ TÌM KIẾM</h2>
                <span className="searchingResult__keyword">Từ khóa: {inputSearch}</span>
                <div className="searchingResult__result searchingResult__result--movie">
                    <img className="result__poster" src={SearchingPoster1} alt=""/>
                        <i className="result__play-button fas fa-play-circle"></i>
                    <div className="result__information">
                        <div className="information__top">
                            <div className="information__starVoting">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <h3 className="information__title">{inputSearch}</h3>
                            <div className="information__index">13</div>
                            <button className="information__button information__button--buyTicket">
                            <i className="fas fa-cart-arrow-down">Mua vé</i>
                            </button>
                            <button className="information__button information__button--moreDetails">
                                <i className="fas fa-info-circle">Xem thêm</i>
                            </button>
                        </div>

                        <div className="information__bottom">
                            <p className="information__category">Tâm lý/Tình cảm</p>
                            <p className="information__detail"><span>Thời lượng </span>120 phút</p>
                            <p className="information__detail"><span>Đạo diễn </span>Damien Chazelle</p>
                            <p className="information__detail"><span>Diễn viên </span>Jenny Wilson, Guy Hawkins, Floyd Miles, Leslie Alexander...</p>
                        </div>
                    </div>
                </div>
                <div className="searchingResult__result searchingResult__result--news">
                    <img className="result__poster" src={SearchingPoster2} alt=""/>
                    <div className="result__information">
                        <h3 className="information__title">
                            <span>{inputSearch} </span>
                            của Kim Soo Hyun tung poster "vương giả" ngầu ngang Quân Vương Bất Diệt, hứa hẹn bùng nổ cuối tuần?
                        </h3>
                        <p className="information__detail">
                            Aku cocok menggunakan produk night cream white secret dari wardah ini. 
                            Buat kulit wajahku terasa lembab. Dan membantu juga mencerahkan sih menurutku. 
                            Tekstur cream tapi tidak begitu thick seperti Day creamnya. Mudah banget diaplikasikan.
                        </p>
                        <span className="information__view">
                            <i className="fas fa-eye">2k</i>
                        </span>
                        <span className="information__modified">01/11/2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchingResultPage
