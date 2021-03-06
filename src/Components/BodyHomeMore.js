import React from 'react'
import './BodyHomeMore.css'
import LaLaLandImage from '../Assets/Images/lalaland-12.png'
import HotIcon from '../Assets/Images/hot-icon-19.png'
import DoanhThu from '../Assets/Images/doanhthu.png'
import { useState, useEffect, useRef } from 'react'
import BodyHomeMoreActor from './BodyHomeMoreActor'
import BodyHomeMoreCmt from './BodyHomeMoreCmt'
import BodyHomeMoreBottom from './BodyHomeMoreBottom'

function BodyHomeMore() {
    const [posters, setPosters] = useState([]);
    const [arr, setArr] = useState([]);
    const [num, setNum] = useState(0);
    const [trans, setTrans] = useState(0);

    const actorList = useRef();

    useEffect(() => {
        // await axios.get('')
        // .then((data) => setPosters(data.recordset));
        setPosters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
      },[]);

    useEffect(() => {
        setArr([...posters.slice(0, 14)]);
    }, [posters])
    useEffect(() => {
        setTrans(-(actorList.current.offsetWidth)*num)
    }, [num])
      
    const handleClick1 = () => {
        setNum(num > 0 ? num - 1 : num )
    }
    const handleClick2 = () => {
        setNum(num < Math.ceil(actorList.current.childNodes.length / 6) - 1 ? num + 1 : num)
    }
    
    const handleClickExit = () => {
        const BodyHomeMore = document.querySelector('.bodyHomeMovie-more');

        BodyHomeMore.style.display = 'none';
        console.log(1);
    }

    return (
        <div className="bodyHomeMovie-more" onClick={handleClickExit}>
                <div className="bodyHomeMovie-more-wrap" onClick={e => e.stopPropagation()}>
                    <div className="bodyHomeMovie-more-exit" onClick={handleClickExit}>
                        <i className="bodyHomeMovie-more-exit-icon fas fa-times-circle" />
                    </div>

                    <div className="bodyHomeMovie-more-body">
                        <div className="bodyHomeMovie-more-left">
                            <img className="bodyHomeMovie-more-left-img" src={LaLaLandImage} />
                            <button className="bodyHomeMovie-more-left-btn1">
                                <img className="bodyHomeMovie-more-left-btn1-img" src={HotIcon} />
                                <p className="bodyHomeMovie-more-left-btn1-content">TOP 2 phim Hot th??ng 10</p>
                            </button>
                            <button className="bodyHomeMovie-more-left-btn2">
                                <img className="bodyHomeMovie-more-left-btn2-img" src={DoanhThu} />
                                <p className="bodyHomeMovie-more-left-btn2-content">TOP 2 doanh thu th??ng 10</p>
                            </button>
                            <div className="bodyHomeMovie-more-left-rating">
                                <div className="bodyHomeMovie-more-left-rating-top">
                                    <p className="bodyHomeMovie-more-left-rating-top-num">4.2</p>
                                    <div className="bodyHomeMovie-more-left-rating-top-right">
                                        <div className="bodyHomeMovie-more-left-rating-top-right-star">
                                            <i className="bodyHomeMovie-more-left-rating-top-right-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-top-right-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-top-right-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-top-right-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-top-right-star-icon far fa-star"></i>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-rating-top-right-cmt">
                                            (25 nh???n x??t)
                                        </div>
                                    </div>
                                </div>

                                <div className="bodyHomeMovie-more-left-rating-bottom">
                                    <div className="bodyHomeMovie-more-left-rating-bottom-item">
                                        <div className="bodyHomeMovie-more-left-rating-bottom-item-star">
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-rating-top-right-star-progress">
                                            <progress className="bodyHomeMovie-more-left-rating-top-right-star-progress-bar" value="15" max="25"></progress>
                                            <label className="bodyHomeMovie-more-left-rating-top-right-star-progress-label">15</label>
                                        </div>
                                    </div>
                                    <div className="bodyHomeMovie-more-left-rating-bottom-item">
                                        <div className="bodyHomeMovie-more-left-rating-bottom-item-star">
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-rating-top-right-star-progress">
                                            <progress className="bodyHomeMovie-more-left-rating-top-right-star-progress-bar" value="5" max="25"></progress>
                                            <label className="bodyHomeMovie-more-left-rating-top-right-star-progress-label">5</label>
                                        </div>
                                    </div>
                                    <div className="bodyHomeMovie-more-left-rating-bottom-item">
                                        <div className="bodyHomeMovie-more-left-rating-bottom-item-star">
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-rating-top-right-star-progress">
                                            <progress className="bodyHomeMovie-more-left-rating-top-right-star-progress-bar" value="3" max="25"></progress>
                                            <label className="bodyHomeMovie-more-left-rating-top-right-star-progress-label">3</label>
                                        </div>
                                    </div>
                                    <div className="bodyHomeMovie-more-left-rating-bottom-item">
                                        <div className="bodyHomeMovie-more-left-rating-bottom-item-star">
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-rating-top-right-star-progress">
                                            <progress className="bodyHomeMovie-more-left-rating-top-right-star-progress-bar" value="2" max="25"></progress>
                                            <label className="bodyHomeMovie-more-left-rating-top-right-star-progress-label">2</label>
                                        </div>
                                    </div>
                                    <div className="bodyHomeMovie-more-left-rating-bottom-item">
                                        <div className="bodyHomeMovie-more-left-rating-bottom-item-star">
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon fas fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                            <i className="bodyHomeMovie-more-left-rating-bottom-item-star-icon far fa-star"></i>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-rating-top-right-star-progress">
                                            <progress className="bodyHomeMovie-more-left-rating-top-right-star-progress-bar" value="1" max="25"></progress>
                                            <label className="bodyHomeMovie-more-left-rating-top-right-star-progress-label">1</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="bodyHomeMovie-more-left-filter">
                                    <p className="bodyHomeMovie-more-left-filter-content">L???c xem theo</p>
                                    <div className="bodyHomeMovie-more-left-filter-star">
                                        <div className="bodyHomeMovie-more-left-filter-star-top">
                                            <button className="bodyHomeMovie-more-left-filter-star-item">
                                                1
                                                <i className="bodyHomeMovie-more-left-filter-star-item-icon far fa-star"></i>
                                            </button>
                                            <button className="bodyHomeMovie-more-left-filter-star-item">
                                                2
                                                <i className="bodyHomeMovie-more-left-filter-star-item-icon far fa-star"></i>
                                            </button>
                                            <button className="bodyHomeMovie-more-left-filter-star-item">
                                                3
                                                <i className="bodyHomeMovie-more-left-filter-star-item-icon far fa-star"></i>
                                            </button>
                                            <button className="bodyHomeMovie-more-left-filter-star-item">
                                                4
                                                <i className="bodyHomeMovie-more-left-filter-star-item-icon far fa-star"></i>
                                            </button>
                                            <button className="bodyHomeMovie-more-left-filter-star-item">
                                                5
                                                <i className="bodyHomeMovie-more-left-filter-star-item-icon far fa-star"></i>
                                            </button>
                                        </div>
                                        <div className="bodyHomeMovie-more-left-filter-star-bottom">
                                            <button className="bodyHomeMovie-more-left-filter-star-item1">G???n ????y</button>
                                            <button className="bodyHomeMovie-more-left-filter-star-item2">???? xem phim</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bodyHomeMovie-more-right">
                            <div className="bodyHomeMovie-more-right-movie">
                                <div className="bodyHomeMovie-more-right-movie-star">
                                    <i className="bodyHomeMovie-more-right-movie-star-icon fas fa-star"></i>
                                    <i className="bodyHomeMovie-more-right-movie-star-icon fas fa-star"></i>
                                    <i className="bodyHomeMovie-more-right-movie-star-icon fas fa-star"></i>
                                    <i className="bodyHomeMovie-more-right-movie-star-icon fas fa-star"></i>
                                    <i className="bodyHomeMovie-more-right-movie-star-icon far fa-star"></i>
                                </div>

                                <div className="bodyHomeMovie-more-right-movie-body">
                                    <div className="bodyHomeMovie-more-right-movie-body-left">
                                        <div className="bodyHomeMovie-more-right-movie-body-left-title">LA LA LAND</div>

                                        <div className="bodyHomeMovie-more-right-movie-body-left-age">13</div>
                                    </div>

                                    <div className="bodyHomeMovie-more-right-movie-body-right">
                                        <button className="bodyHomeMovie-more-right-movie-body-right-buy">
                                            <i className="bodyHomeMovie-more-right-movie-body-right-buy-cart fas fa-cart-arrow-down"></i>
                                            <p className="bodyHomeMovie-more-right-movie-body-right-buy-title">Mua v??</p>
                                        </button>
                                        <button className="bodyHomeMovie-more-right-movie-body-right-trailer">
                                            <i className="bodyHomeMovie-more-right-movie-body-right-trailer-play fas fa-play"></i>
                                            <p className="bodyHomeMovie-more-right-movie-body-right-trailer-title">Trailer</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="bodyHomeMovie-more-right-movie-desc">
                                    <p className="bodyHomeMovie-more-right-movie-desc-title">M?? t???</p>
                                    <p className="bodyHomeMovie-more-right-movie-desc-content">Nh???ng K??? Kh??? M???ng M?? - La La Land k??? v??? v??? c?? n??ng Mia, m???t n??? di???n vi??n m???i n???i ?????y tham v???ng, v?? c??ng vi???c ?????u ti??n c???a c?? ????? b?????c v??o con ???????ng ??i???n ???nh l?? ph???c v??? ????? u???ng pha c?? ph?? cho c??c ng??i sao ??i???n ???nh gi???a c??c bu???i th??? vai v?? Sebastian, m???t nh???c s?? nh???c jazz, ???? ho??n th??nh b???ng c??ch ch??i c??c h???p ?????ng bi???u di???n ti???c cocktail trong c??c qu??n bar t???i t??n. Th??? nh??ng khi s??? nghi???p c???a h??? th??nh c??ng t??ng l??n, h??? ph???i ?????i m???t v???i nh???ng quy???t ?????nh b???t ?????u l??m t??nh y??u c???a h??? tr??? n??n r???c r???i h??n, v?? nh???ng gi???c m?? m?? h??? ???? n??? l???c ????? duy tr?? trong nhau ??e d???a s??? chia c???t h???.</p>
                                    
                                    <div className="bodyHomeMovie-more-right-movie-desc-bottom">
                                        <div className="bodyHomeMovie-more-right-movie-desc-left">
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Ng??y kh???i chi???u</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Th???i l?????ng</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Th??? lo???i</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">?????o di???n</p>
                                        </div>

                                        <div className="bodyHomeMovie-more-right-movie-desc-right">
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">2008</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">120 ph??t</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">T??m l??/T??nh c???m</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">Damien Chazelle</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="bodyHomeMovie-more-right-actor">
                                <div className="bodyHomeMovie-more-right-actor-title">Di???n vi??n</div>
                                <div className="bodyHomeMovie-more-right-actor-body">
                                    <i className="hot-movies-bottom-arrow-item fas fa-chevron-left" onClick={handleClick1}></i>

                                    <div className="bodyHomeMovie-more-right-actor-body-list-wrapper">
                                        <ul 
                                            className="bodyHomeMovie-more-right-actor-body-list" 
                                            ref={actorList}
                                            style={{left: trans+"px"}}
                                        >
                                            {arr.map((_, index) => (
                                                <BodyHomeMoreActor
                                                    key={index}
                                                    name="Jenny Wilson"
                                                />
                                            ))}
                                        </ul>
                                    </div>

                                    <i className="hot-movies-bottom-arrow-item fas fa-chevron-right" onClick={handleClick2}></i>
                                </div>
                            </div>

                            <div className="bodyHomeMovie-more-right-cmt">
                                <div className="bodyHomeMovie-more-right-cmt-evaluate">
                                    <p className="bodyHomeMovie-more-right-cmt-evaluate-title">????nh gi??</p>
                                    <p className="bodyHomeMovie-more-right-cmt-evaluate-content">(????ng nh???p ????? vi???t ????nh gi?? m???i)</p>
                                </div>

                                <div className="bodyHomeMovie-more-right-cmt-list">
                                    {<>
                                        
                                        <BodyHomeMoreCmt />
                                        <BodyHomeMoreCmt />
                                        <BodyHomeMoreCmt />
                                        <BodyHomeMoreCmt />
                                    </>}
                                </div>

                                <div className="bodyHomeMovie-more-right-cmt-more">
                                    <a className="bodyHomeMovie-more-right-cmt-more-content">Xem th??m</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bodyHomeMovie-more-bottom">
                        <p className="bodyHomeMovie-more-bottom-title">Xem th??m</p>

                        <BodyHomeMoreBottom />
                    </div>
                </div>
          </div>
    )
}

export default BodyHomeMore
