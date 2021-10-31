import React, { useEffect, useRef, useState } from 'react';
import './BodyHomeMovies.css';
import BodyHomeMovie from './BodyHomeMovie';

function BodyHomeMovies() {
  const [posters, setPosters] = useState([]);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(0);

  const movies = useRef();

  useEffect(() => {
    // await axios.get('')
    // .then((data) => setPosters(data.recordset));
    setPosters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
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

  return (
    <div className="bodyHomeMovies_wrap">
        {/*<div className="bodyHomeMovies" ref={movies} key={index}>
          {Array(10).fill().map((_, index) => (
            <BodyHomeMovie
              key={index}
              padding={20} 
              name="Raya and the last dragon" 
              age={13} 
              type="Trẻ em/Phiêu lưu"
              description="Raya và Rồng Thần Cuối Cùng kể về một vương quốc huyền bí có tên là Kumandra – vùng đất mà loài rồng và con người sống hòa thuận với nhau. Nhưng rồi một thế lực đen tối bỗng đe dọa bình yên nơi đây, loài rồng buộc phải hi sinh để cứu lấy loài người..."  
              height={300}
              width={207.7} 
              wrapWidth={20}
            />
          ))}
          </div> */}

        <div className="bodyHomeMovies" ref={movies}>
          {arr.map((_, index) => (
            <BodyHomeMovie
              key={index}
              padding={20} 
              name="Raya and the last dragon" 
              age={13} 
              type="Trẻ em/Phiêu lưu"
              description="Raya và Rồng Thần Cuối Cùng kể về một vương quốc huyền bí có tên là Kumandra – vùng đất mà loài rồng và con người sống hòa thuận với nhau. Nhưng rồi một thế lực đen tối bỗng đe dọa bình yên nơi đây, loài rồng buộc phải hi sinh để cứu lấy loài người..."  
              height={300}
              width={207.7} 
              wrapWidth={20}
            />
          ))}
        </div>

      <div className="bodyHomePageNumber">        
        <i className="fas fa-angle-left"></i>
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
        <i className="fas fa-angle-right"></i>  
      </div>
    </div>
    
  )
}

export default BodyHomeMovies
