import React from 'react'
import HotImg from '../Assets/Images/hot-icon-19.png'
import HotMovie from './HotMovie'
import './HotMovies.css'
import img1Num from '../Assets/Images/Untitled-1-03.png'
import img1Img from '../Assets/Images/raya-12.png'
import img2Num from '../Assets/Images/Untitled-1-10.png'
import img2Img from '../Assets/Images/freeguy-12.png'
import img3Num from '../Assets/Images/Untitled-1-07.png'
import img3Img from '../Assets/Images/lalaland-12.png'
import img4Num from '../Assets/Images/Untitled-1-08.png'
import img4Img from '../Assets/Images/woderwoman-12.png'
import img5Num from '../Assets/Images/Untitled-1-06.png'
import img5Img from '../Assets/Images/aladdin-12.png'
import img6Num from '../Assets/Images/Untitled-1-02.png'
import img6Img from '../Assets/Images/ongnhiphieuluuky-12.png'
import img7Num from '../Assets/Images/Untitled-1-04.png'
import img7Img from '../Assets/Images/bantaydietquy-12.png'

function HotMovies() {
    return (
        <div className="hot-movies">
            <div className="hot-movies-top">
                <img className="hot-movies-top-img" src={HotImg} alt="hot-img"/>
                <p className="hot-movies-top-label">
                    Phim hot tháng 10
                </p>
            </div>

            <div className="hot-movies-bottom">
                <i className="hot-movies-bottom-arrow-item fas fa-chevron-left"></i>
                <ul className="hot-movies-bottom-movie">
                    <li>
                        <HotMovie 
                            src1={img1Num}
                            src2={img1Img}
                        />
                    </li>
                    <li>
                        <HotMovie 
                            src1={img2Num}
                            src2={img2Img}
                        />
                    </li>
                    <li>
                        <HotMovie 
                            src1={img3Num}
                            src2={img3Img}
                        />
                    </li>
                    <li>
                        <HotMovie 
                            src1={img4Num}
                            src2={img4Img}
                        />
                    </li>
                    <li>
                        <HotMovie 
                            src1={img5Num}
                            src2={img5Img}
                        />
                    </li>
                    <li>
                        <HotMovie 
                            src1={img6Num}
                            src2={img6Img}
                        />
                    </li>
                    <li>
                        <HotMovie 
                            src1={img7Num}
                            src2={img7Img}
                        />
                    </li>
                </ul>
                <i className="hot-movies-bottom-arrow-item fas fa-chevron-right"></i>
            </div>
        </div>
    )
}

export default HotMovies
