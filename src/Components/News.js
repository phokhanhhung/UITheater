import React from 'react'
import './News.css'
import { useState, useEffect} from 'react'

import NewsAdsImg from '../Assets/Images/news-ads-poster.png'
import NewsLatestItem from './NewsLatestItem'
import NewsLatestItemImg from '../Assets/Images/news-latest-item-image.png'
import NewsLatestItemAds from '../Assets/Images/news-latest-item-ads.png'

import NewsTrailer from './NewsTrailer'
import NewsTrending from './NewsTrending'
import NewsAds from './NewsAds'

function News() {
    const [newsLatest, setNewsLatest] = useState([])
    const [arr, setArr] = useState()

    useEffect(() => {
        // await axios.get('')
        // .then((data) => setPosters(data.recordset));
        setNewsLatest([1, 2, 3, 4, 5, 6, 7])
    }, [])

    useEffect(() => {
        setArr([...newsLatest.slice(0, 7)])
    }, [newsLatest])



    return (
        <div className="news-container">
            <div className="news-trailer">
                <div className="news-wrapper">
                    <NewsTrailer />
                </div>
            </div>

            <div className="news-trending-container">
                <div className="news-wrapper">
                    <NewsTrending />
                </div>
            </div>

            <div className="news-ads-container">
                <NewsAds 
                    src={NewsAdsImg}
                    name="Hometown Cha-cha-cha (2021)"
                    title="Cách Hometown Cha-Cha-Cha hàn gắn 2 chủ nghĩa sống đang chia rẽ người trẻ: Sống vì mình hay vì tập thể?"
                    viewer="2k"
                    time="01/11/2021"
                    desc1='Vẫn là mô-típ "trái dấu hút nhau", thế nhưng sự cao tay của Hometown Cha-Cha-Cha nằm ở cách biên kịch biết nên khai thác khía cạnh đối lập nào của 2 nhân vật trong một thể loại phim đang dần trở nên bão hòa. Nếu như cô nàng nha sĩ Yoon Hye Jin (Shin Min Ah) đại diện cho lối sống "hiện đại" tập trung vào bản thân, thì Hong Du Sik (Kim Seon Ho) rõ ràng chính là biểu trưng của phong cách sống vì cộng đồng, làng xóm.'
                    desc2='Sự đối lập trong hệ tư tưởng của hai nhân vật này chính là yếu tố bất ngờ, và cũng là chìa khóa để phim không chỉ khai thác được sự lãng mạn, mà còn là mang đến những câu chuyện thấm đẫm tình người nơi làng biển Gongjin. Để rồi sau mỗi tập phim của Hometown Cha-Cha-Cha, chúng ta nhận được nhiều hơn một câu chuyện tình bên sóng vỗ bì bạch - chính là cách thức để hạnh phúc.'
                />
            </div>

            <div className="news-wrapper">
                <div className="news-latest-container">
                    <div className="news-latest-left">
                        <div className="news-latest-left-top">
                            <p className="news-latest-left-top-title">Tin mới nhất</p>
                            <p className="news-latest-left-top-all">
                                <a href="/" className="news-latest-left-top-all-title" alt="title">Xem tất cả</a>
                                <i className="news-latest-left-top-all-icon fas fa-chevron-right"></i>
                            </p>
                        </div>
                        
                        {
                            arr?.map((_, index) => (
                                <NewsLatestItem 
                                    key={index}
                                    src={NewsLatestItemImg}
                                    title='Điên Thì Có Sao của Kim Soo Hyun tung poster "vương giả" ngầu ngang Quân Vương Bất Diệt, hứa hẹn bùng nổ cuối tuần?'
                                    desc="Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lembab. Dan membantu juga mencerahkan sih menurutku. Tekstur cream tapi tidak begitu thick seperti Day creamnya. Mudah banget diaplikasikan."
                                    viewer="2k"
                                    time="01/11/2021"
                                />
                            ))
                        }
                    </div>

                    <div className="news-latest-right">
                        <img className="news-latest-right-ads" src={NewsLatestItemAds} alt="ads" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
