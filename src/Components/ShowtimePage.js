import React, { useState, useEffect, useRef } from 'react';
import './ShowtimePage.css';
import ShowtimePageMovie from './ShowtimePageMovie';

function ShowtimePage() {

  const [posters, setPosters] = useState([]);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(0);

  const [trans, setTrans] = useState(0);
  const [dateNum, setDateNum] = useState(0);

  const date = useRef();

  useEffect(() => {
    // await axios.get(`/{name}`)
    // .then((data) => setPosters(data.recordset));
    setPosters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
    console.log(date);
  },[]);

  useEffect(() => {
    setArr([...posters.slice(0, 6)]);
  }, [posters])

  const handlePaging = (index) => {
    if(index + 1 === Math.ceil(posters.length/6)) {
      setArr([...posters.slice(index*6)]);
    } else {
      setArr([...posters.slice(index*6, index*6 + 6)]);
    }
    setPage(index);
  }

  const handlePrevious = () => {
    if(page > 0) handlePaging(page - 1);
  }

  const handleNext = () => {
    if(page < Math.floor(posters.length/10)) handlePaging(page + 1);
  }

  const handleMove = (index) => {
    setTrans(index*(date.current.clientWidth+ 30));
  }

  const handleDateClick = (index) => {
    // if(index < số date - 5) thì mới cho handleMove
    handleMove(index);
    setDateNum(index);
    console.log(index);
  }

  return (
    <div className="showtimePage__color1">
      <div className="showtimePage__bg-img">
        <div className="showtimePage__color2">
          <h1>LỊCH CHIẾU</h1>
          <div className="showtimePage__choose-theater">
            <p>Chọn rạp</p>
            <div className="showtimePage__choice">
              <p>UITheater Sinh Viên</p>
              <i className="fas fa-caret-down"></i>
            </div>
          </div>
          <div className="showtimePage__dates-block">
            <div 
              className="showtimePage__dates" 
              style={{transform: `translateX(-${trans}px)`}}
            >
              {Array(20).fill().map((item, index) => (
                <div 
                  key={index} 
                  className={dateNum === index ? "showtimePage__date onShow" : "showtimePage__date"}
                  ref={date} 
                  onClick={() => handleDateClick(index)}
                >
                  <p>THÁNG 11</p>
                  <h1>01</h1>
                </div>
              ))}
            </div>
          </div>
          

          <div className="showtimePage">
            <div className="showtimePage__background-color">
              <div className="showtimePage__header">
                <i className="fas fa-history"></i>
                <p>LỊCH CHIẾU PHIM TẠI UITHEATER SINH VIÊN</p>
                <span></span>
              </div>

              <div className="showtimePage__movies">
                {arr.map((item, index) => (
                  <div key={index} className="showtimePage__movie" onClick={() => handleDateClick(index)}>
                    <ShowtimePageMovie />
                  </div>
                ))}
              </div>
              
              <div className="showtimePage__number">
                <i className="fas fa-angle-left" onClick={handlePrevious}></i>
                <ul className="showtimePage__number-list">
                  {Array(Math.ceil(posters.length/6)).fill().map((_, index) => (
                    <li 
                      key={index} 
                      onClick={() => handlePaging(index)}
                      className={page === index ? "onPage" : ""}
                    >
                      {index+1}
                    </li>
                  ))}
                  
                </ul>       
                <i className="fas fa-angle-right" onClick={handleNext}></i>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default ShowtimePage
