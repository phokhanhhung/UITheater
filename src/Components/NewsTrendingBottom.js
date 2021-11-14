import React from 'react'
import NewsTrendingItemImg from '../Assets/Images/news-trending-item-image.png'
import './NewsTrendingBottom.css'

import NewsTrendingItem from './NewsTrendingItem'

import {useState, useEffect, useRef} from 'react'

function NewsTrendingBottom() {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [arr, setArr] = useState([]);
    const [trans, setTrans] = useState(0);
    const [num, setNum] = useState(0);
    const [number, setNumber] = useState(0);
    const move = useRef();

    useEffect(() => {
        // await axios.get('')
        // .then((data) => setPosters(data.recordset));
        setTrendingFilms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    },[]); 
    useEffect(() => {
        setArr([...trendingFilms.slice(0, 18)]);
    }, [trendingFilms])
    useEffect(() => {
        setTrans(-(move.current.offsetWidth)*num)
    }, [num])
    useEffect(() => {
        setNumber(Math.ceil(move.current.childNodes.length/4));
    })    

    const handleClick3 = () => {
        setNum(num > 0 ? num - 1 : num )
    }
    const handleClick4 = () => {
        setNum(num < number - 1 ? num + 1 : num)
    }
    const handlePaging = (index) => {
        setNum(index)
    }

    return (
        <div className="news-trending-bottom">
            <div className="news-trending-bottom-wrapper">
                <i className="news-trending-bottom-left fas fa-chevron-left" onClick={handleClick3}></i>

                <div className="news-trending-bottom-wrapper-list">
                    <ul 
                        className="news-trending-bottom-list"
                        ref={move}
                        style={{left: trans+"px"}}
                    >
                        {
                            arr.map((_, index) => (
                                <NewsTrendingItem
                                    key={index}
                                    src={NewsTrendingItemImg}
                                    title='Điên Thì Có Sao tung poster "vương giả" ngầu ngang Quân Vương Bất Diệt, hứa hẹn bùng nổ cuối tuần?'
                                    time="01/11/2021"
                                    viewer="2k"
                                />
                            ))
                        }
                    </ul>
                </div>

                <i className="news-trending-bottom-left-right fas fa-chevron-right" onClick={handleClick4}></i>
            </div>

            <div className="news-trending-bottom-paging">
                {
                    Array(number)
                    .fill()
                    .map((_, index) => (
                        <span key={index} className={num===index ? "onPage" : ""} onClick={() => handlePaging(index)}></span>
                    ))              
                }
            </div>
        </div>
    )
}

export default NewsTrendingBottom
