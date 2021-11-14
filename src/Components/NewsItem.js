import React from 'react'
import './NewsItem.css'
import {Link} from 'react-router-dom'

import backgroundNewsItem from '../Assets/Images/news-item-background.png'
import newsItemsImg from '../Assets/Images/news-item-img.png'
import num1 from '../Assets/Images/Untitled-1-03.png'
import img1 from '../Assets/Images/lalaland-12.png'
import adsImg from '../Assets/Images/news-latest-item-ads.png'

function NewsItem() {
    return (
        <div className="news-item">
            <img src={backgroundNewsItem} alt="background" className="news-item-background" />
            <div className="news-item-wrapper">
                <Link to="/news/" className="news-item-previousPage">
                    Về trang trước
                </Link>

                <div className="news-item-body">
                    <div className="news-item-body-intro">
                        <div className="news-item-body-intro-name">
                            <p>Hometown Cha-cha-cha (2021)</p>
                        </div>
                        <div className="news-item-body-intro-title">Cách Hometown Cha-Cha-Cha hàn gắn 2 chủ nghĩa sống đang chia rẽ người trẻ: Sống vì mình hay vì tập thể?</div>
                        <div className="news-item-body-intro-action">
                            <div className="news-item-body-intro-action-btn">
                                <button className="news-item-body-intro-action-btn-item">
                                    <i className="news-item-body-intro-action-btn-icon far fa-thumbs-up"></i>
                                    <p className="news-item-body-intro-action-btn-icon-title">Thích</p>
                                </button>
                                <button className="news-item-body-intro-action-btn-item">
                                    <i className="news-item-body-intro-action-btn-icon fas fa-share-alt"></i>
                                    <p className="news-item-body-intro-action-btn-icon-title">Thích</p>
                                </button>
                            </div>
                            <p className="news-item-body-intro-action-time">19:00 02/11/2021</p>
                        </div>
                        <div className="news-item-body-intro-line"></div>
                    </div>

                    <div className="news-item-body-content">
                        <div className="news-item-body-content-left">
                            <p className="news-item-body-content-left-title">
                                Sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình.    
                            </p>
                            <p className="news-item-body-content-left-para">
                                Người ta trông chờ gì ở một câu chuyện tình yêu lấy bối cảnh nơi làng biển đẹp nên thơ? Có lẽ là cuộc đụng độ của chàng và nàng, là tình yêu đôi lứa nảy nở dưới ánh hoàng hôn thơ mộng, là những hiểu lầm dẫn tới cãi vã, là nụ hôn cháy bỏng có vị mặn của nước mắt. Hometown Cha-Cha-Cha (Điệu Cha-Cha-Cha Làng Biển) gạt phăng những tưởng tượng ấy ra khỏi tâm trí của khán giả. Bằng một cách thú vị và thông minh, bộ phim sử dụng sự hài hước đầy duyên dáng của mình để không chỉ kể một câu chuyện tình yêu, mà còn dạy chúng ta nhiều điều về lẽ sống.
                            </p>
                            <img className="news-item-body-content-left-img" src={newsItemsImg} alt="img" />
                            <p className="news-item-body-content-left-para">
                                Vẫn là mô-típ "trái dấu hút nhau", thế nhưng sự cao tay của Hometown Cha-Cha-Cha nằm ở cách biên kịch biết nên khai thác khía cạnh đối lập nào của 2 nhân vật trong một thể loại phim đang dần trở nên bão hòa. Nếu như cô nàng nha sĩ Yoon Hye Jin (Shin Min Ah) đại diện cho lối sống "hiện đại" tập trung vào bản thân, thì Hong Du Sik (Kim Seon Ho) rõ ràng chính là biểu trưng của phong cách sống vì cộng đồng, làng xóm.
                            </p>
                            <p className="news-item-body-content-left-para">
                                Sự đối lập trong hệ tư tưởng của hai nhân vật này chính là yếu tố bất ngờ, và cũng là chìa khóa để phim không chỉ khai thác được sự lãng mạn, mà còn là mang đến những câu chuyện thấm đẫm tình người nơi làng biển Gongjin. Để rồi sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình bên sóng vỗ bì bạch - chính là cách thức để hạnh phúc.
                            </p>
                            <p className="news-item-body-content-left-heading">Lằn ranh mỏng manh giữa yêu thương bản thân và trở nên ích kỷ</p>
                            <img className="news-item-body-content-left-img" src={newsItemsImg} alt="img" />
                            <p className="news-item-body-content-left-para">
                                Vẫn là mô-típ "trái dấu hút nhau", thế nhưng sự cao tay của Hometown Cha-Cha-Cha nằm ở cách biên kịch biết nên khai thác khía cạnh đối lập nào của 2 nhân vật trong một thể loại phim đang dần trở nên bão hòa. Nếu như cô nàng nha sĩ Yoon Hye Jin (Shin Min Ah) đại diện cho lối sống "hiện đại" tập trung vào bản thân, thì Hong Du Sik (Kim Seon Ho) rõ ràng chính là biểu trưng của phong cách sống vì cộng đồng, làng xóm.
                            </p>
                            <p className="news-item-body-content-left-para">
                                Sự đối lập trong hệ tư tưởng của hai nhân vật này chính là yếu tố bất ngờ, và cũng là chìa khóa để phim không chỉ khai thác được sự lãng mạn, mà còn là mang đến những câu chuyện thấm đẫm tình người nơi làng biển Gongjin. Để rồi sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình bên sóng vỗ bì bạch - chính là cách thức để hạnh phúc.
                            </p>
                            <img className="news-item-body-content-left-img" src={newsItemsImg} alt="img" />
                            <p className="news-item-body-content-left-para">
                                Vẫn là mô-típ "trái dấu hút nhau", thế nhưng sự cao tay của Hometown Cha-Cha-Cha nằm ở cách biên kịch biết nên khai thác khía cạnh đối lập nào của 2 nhân vật trong một thể loại phim đang dần trở nên bão hòa. Nếu như cô nàng nha sĩ Yoon Hye Jin (Shin Min Ah) đại diện cho lối sống "hiện đại" tập trung vào bản thân, thì Hong Du Sik (Kim Seon Ho) rõ ràng chính là biểu trưng của phong cách sống vì cộng đồng, làng xóm.
                            </p>
                            <p className="news-item-body-content-left-para">
                                Sự đối lập trong hệ tư tưởng của hai nhân vật này chính là yếu tố bất ngờ, và cũng là chìa khóa để phim không chỉ khai thác được sự lãng mạn, mà còn là mang đến những câu chuyện thấm đẫm tình người nơi làng biển Gongjin. Để rồi sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình bên sóng vỗ bì bạch - chính là cách thức để hạnh phúc.
                            </p>
                            <p className="news-item-body-content-left-heading">Không phải sống vì mình, hay sống vì người khác ... mà là sống để yêu thương</p>
                            <p className="news-item-body-content-left-para">
                                Sự đối lập trong hệ tư tưởng của hai nhân vật này chính là yếu tố bất ngờ, và cũng là chìa khóa để phim không chỉ khai thác được sự lãng mạn, mà còn là mang đến những câu chuyện thấm đẫm tình người nơi làng biển Gongjin. Để rồi sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình bên sóng vỗ bì bạch - chính là cách thức để hạnh phúc.
                            </p>
                            <img className="news-item-body-content-left-img" src={newsItemsImg} alt="img" />
                            <p className="news-item-body-content-left-para">
                                Vẫn là mô-típ "trái dấu hút nhau", thế nhưng sự cao tay của Hometown Cha-Cha-Cha nằm ở cách biên kịch biết nên khai thác khía cạnh đối lập nào của 2 nhân vật trong một thể loại phim đang dần trở nên bão hòa. Nếu như cô nàng nha sĩ Yoon Hye Jin (Shin Min Ah) đại diện cho lối sống "hiện đại" tập trung vào bản thân, thì Hong Du Sik (Kim Seon Ho) rõ ràng chính là biểu trưng của phong cách sống vì cộng đồng, làng xóm.
                            </p>
                            <p className="news-item-body-content-left-para">
                                Sự đối lập trong hệ tư tưởng của hai nhân vật này chính là yếu tố bất ngờ, và cũng là chìa khóa để phim không chỉ khai thác được sự lãng mạn, mà còn là mang đến những câu chuyện thấm đẫm tình người nơi làng biển Gongjin. Để rồi sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình bên sóng vỗ bì bạch - chính là cách thức để hạnh phúc.
                            </p>

                            <div className="news-item-body-content-left-source">
                                <p><b><i>Nguồn ảnh:</i></b> Netflix</p>
                            </div>
                            <div className="news-item-body-content-left-bottom">
                                <div className="news-item-body-content-left-bottom-tags">Tags:</div>
                                <div className="news-item-body-content-left-bottom-tags-name">#hometownchachacha</div>
                                <div className="news-item-body-content-left-bottom-tags-name">#ShinMinAh</div>
                                <div className="news-item-body-content-left-bottom-tags-name">#KimSeonHo</div>
                                <div className="news-item-body-content-left-bottom-tags-name">#PhimHanQuoc</div>
                            </div>
                        </div>

                        <div className="news-item-body-content-right">
                            <div className="news-item-body-content-right-top">
                                <div className="news-item-body-content-right-title">BẢNG XẾP HẠNG PHIM 11/2021</div>
                                <div className="news-item-body-content-right-item">
                                    <img className="news-item-body-content-right-item-num" src={num1} alt="num1" />
                                    <img className="news-item-body-content-right-item-img" src={img1} alt="img1" />
                                </div>
                                <div className="news-item-body-content-right-item">
                                    <img className="news-item-body-content-right-item-num" src={num1} alt="num1" />
                                    <img className="news-item-body-content-right-item-img" src={img1} alt="img1" />
                                </div>
                                <div className="news-item-body-content-right-item">
                                    <img className="news-item-body-content-right-item-num" src={num1} alt="num1" />
                                    <img className="news-item-body-content-right-item-img" src={img1} alt="img1" />
                                </div>
                                <div className="news-item-body-content-right-item">
                                    <img className="news-item-body-content-right-item-num" src={num1} alt="num1" />
                                    <img className="news-item-body-content-right-item-img" src={img1} alt="img1" />
                                </div>
                                <div className="news-item-body-content-right-item">
                                    <img className="news-item-body-content-right-item-num" src={num1} alt="num1" />
                                    <img className="news-item-body-content-right-item-img" src={img1} alt="img1" />
                                </div>
                            </div>
                            <div className="news-item-body-content-right-bottom">
                                <img className="news-item-body-content-right-bottom-img" src={adsImg} alt="adsImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
