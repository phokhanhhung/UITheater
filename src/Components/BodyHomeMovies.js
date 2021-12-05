import React, { useEffect, useRef, useState } from 'react';
import './BodyHomeMovies.css';
import BodyHomeMovie from './BodyHomeMovie';
import axios from 'axios';
import {findImage} from '../Images'

function BodyHomeMovies({name}) {
  const [posters, setPosters] = useState([]);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/phim')
    .then (data => {
      if (data.data.length >= 1) setPosters([...data.data]);
      else alert('Chưa có phim nào')
    })
    .catch(err => alert('Có lỗi xảy ra thử tải lại trang!'))
  },[]);

  useEffect(() => {
    setArr([...posters.slice(0, 10)]);
  }, [posters])

  const handlePaging = (index) => {
    if(index + 1 === Math.ceil(posters.length/10)) {
      setArr([...posters.slice(index*10)]);
    } else {
      setArr([...posters.slice(index*10, index*10 + 10)]);
    }
    setPage(index);
  }

  const handlePrevious = () => {
    if(page > 0) handlePaging(page - 1);
  }

  const handleNext = () => {
    if(page < Math.floor(posters.length/10)) handlePaging(page + 1);
  }

  return (
    <div className="bodyHomeMovies_wrap">

        <div className="bodyHomeMovies">
          {arr.map((item, index) => (
            <BodyHomeMovie
              key={index}
              padding={20} 
              name={item.TENPHIM}
              age={item.DOTUOI} 
              type={item.THELOAI}
              description={item.MOTA}  
              img = {findImage(item.TENPHIM)}
              height={300}
              width={207.7} 
              wrapWidth={20}
            />
          ))}
        </div>

      <div className="bodyHomePageNumber">        
        <i className="fas fa-angle-left" onClick={handlePrevious}></i>
        <ul className="bodyHomePageNumber_list">
          {Array(Math.ceil(posters.length/10)).fill().map((_, index) => (
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
    
  )
}

export default BodyHomeMovies
