import React from 'react'
import './BodyHomeMoreBottom.css'
import BodyHomeMoreBottomItem from './BodyHomeMoreBottomItem'
import {useState, useEffect, useRef} from 'react'

function BodyHomeMoreBottom() {
    const [posters, setPosters] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [trans, setTrans] = useState(0);
    const [num, setNum] = useState(0);
    const [number, setNumber] = useState(0);
    const move = useRef();

    useEffect(() => {
        // await axios.get('')
        // .then((data) => setPosters(data.recordset));
        setPosters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
      },[]); 
    useEffect(() => {
        setArr2([...posters.slice(0, 14)]);
    }, [posters])
    useEffect(() => {
        setTrans(-(move.current.offsetWidth)*num)
    }, [num])
    useEffect(() => {
        setNumber(Math.ceil(move.current.childNodes.length/6));
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
        <div className="bodyHomeMovie-more-bottom-more-wrap">
            <div className="bodyHomeMovie-more-bottom-more">
                <i className="bodyHomeMovie-more-bottom-more-item fas fa-chevron-left" onClick={handleClick3}></i>
                <div className="bodyHomeMovie-more-bottom-more-list-wrapper">
                    <ul 
                        className="bodyHomeMovie-more-bottom-more-list"
                        ref={move}
                        style={{left: trans+"px"}}
                    >
                        {
                            arr2.map((_, index) => (
                                <BodyHomeMoreBottomItem
                                    key={index}
                                />
                            ))
                        }
                    </ul>
                </div>
                <i className="bodyHomeMovie-more-bottom-more-item fas fa-chevron-right" onClick={handleClick4}></i>
            </div>

            <div className="bodyHomeMovie-more-bottom-paging">
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

export default BodyHomeMoreBottom
