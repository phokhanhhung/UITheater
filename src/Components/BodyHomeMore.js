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
                                <p className="bodyHomeMovie-more-left-btn1-content">TOP 2 phim Hot tháng 10</p>
                            </button>
                            <button className="bodyHomeMovie-more-left-btn2">
                                <img className="bodyHomeMovie-more-left-btn2-img" src={DoanhThu} />
                                <p className="bodyHomeMovie-more-left-btn2-content">TOP 2 doanh thu tháng 10</p>
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
                                            (25 nhận xét)
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
                                    <p className="bodyHomeMovie-more-left-filter-content">Lọc xem theo</p>
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
                                            <button className="bodyHomeMovie-more-left-filter-star-item1">Gần đây</button>
                                            <button className="bodyHomeMovie-more-left-filter-star-item2">Đã xem phim</button>
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
                                            <p className="bodyHomeMovie-more-right-movie-body-right-buy-title">Mua vé</p>
                                        </button>
                                        <button className="bodyHomeMovie-more-right-movie-body-right-trailer">
                                            <i className="bodyHomeMovie-more-right-movie-body-right-trailer-play fas fa-play"></i>
                                            <p className="bodyHomeMovie-more-right-movie-body-right-trailer-title">Trailer</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="bodyHomeMovie-more-right-movie-desc">
                                    <p className="bodyHomeMovie-more-right-movie-desc-title">Mô tả</p>
                                    <p className="bodyHomeMovie-more-right-movie-desc-content">Những Kẻ Khờ Mộng Mơ - La La Land kể về về cô nàng Mia, một nữ diễn viên mới nổi đầy tham vọng, và công việc đầu tiên của cô để bước vào con đường điện ảnh là phục vụ đồ uống pha cà phê cho các ngôi sao điện ảnh giữa các buổi thử vai và Sebastian, một nhạc sĩ nhạc jazz, đã hoàn thành bằng cách chơi các hợp đồng biểu diễn tiệc cocktail trong các quán bar tồi tàn. Thế nhưng khi sự nghiệp của họ thành công tăng lên, họ phải đối mặt với những quyết định bắt đầu làm tình yêu của họ trở nên rắc rối hơn, và những giấc mơ mà họ đã nỗ lực để duy trì trong nhau đe dọa sẽ chia cắt họ.</p>
                                    
                                    <div className="bodyHomeMovie-more-right-movie-desc-bottom">
                                        <div className="bodyHomeMovie-more-right-movie-desc-left">
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Ngày khởi chiếu</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Thời lượng</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Thể loại</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-left-item">Đạo diễn</p>
                                        </div>

                                        <div className="bodyHomeMovie-more-right-movie-desc-right">
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">2008</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">120 phút</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">Tâm lý/Tình cảm</p>
                                            <p className="bodyHomeMovie-more-right-movie-desc-right-item">Damien Chazelle</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="bodyHomeMovie-more-right-actor">
                                <div className="bodyHomeMovie-more-right-actor-title">Diễn viên</div>
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
                                    <p className="bodyHomeMovie-more-right-cmt-evaluate-title">Đánh giá</p>
                                    <p className="bodyHomeMovie-more-right-cmt-evaluate-content">(Đăng nhập để viết đánh giá mới)</p>
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
                                    <a className="bodyHomeMovie-more-right-cmt-more-content">Xem thêm</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bodyHomeMovie-more-bottom">
                        <p className="bodyHomeMovie-more-bottom-title">Xem thêm</p>

                        <BodyHomeMoreBottom />
                    </div>
                </div>
          </div>
    )
}

export default BodyHomeMore
