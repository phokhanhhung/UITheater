import React, { useEffect, useRef } from 'react';
import "./BodyHomeSuggestMovies.css";
import BodyHomeMovie from './BodyHomeMovie';
import { useState } from 'react/cjs/react.development';

function BodyHomeSuggestMovies() {
  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);

  // console.log(num, "outside");

  const move = useRef();
  const movie = useRef();

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    console.log(num, "effect");
    setTrans(-(movie.current.offsetWidth + 31.5)*6*num);
  }, [num]);

  const handleRightClick = () => {
    if(num < Math.floor(move.current.childNodes.length/6)) setNum((num) => num + 1);
    console.log(num, "click");
  }

  const handleLeftClick = () => {
    if(num > 0) setNum((num) => num - 1);
    console.log(num);
  }


  return (
    <div className="bodyHomeSuggestMovies">
        <i className="fas fa-angle-left" onClick={handleLeftClick}></i>
        <div className="bodyHomeSuggest_wrap" >
          <ul 
            ref={move}
            className="bodyHomeSuggest_list" 
            style={{left: trans+"px"}}
          >
            {Array(15).fill().map((_, index) => (
              <li>
              <BodyHomeMovie
                ref={movie}
                padding={10}
                name="Raya and the last dragon" 
                age={13} 
                type="Trẻ em/Phiêu lưu"
                description="Raya và Rồng Thần Cuối Cùng kể về một vương quốc huyền bí có tên là Kumandra – vùng đất mà loài rồng và con người sống hòa thuận với nhau. Nhưng rồi một thế lực đen tối bỗng đe dọa bình yên nơi đây, loài rồng buộc phải hi sinh để cứu lấy loài người..."    
                height={275}  
                width={190.39} 
                marginLeft={0} 
                marginRight={31.5}
              />
            </li>
            ))}
            
          </ul> 
        </div>
        
            
        <i className="fas fa-angle-right" onClick={handleRightClick}></i> 
      </div>
  )
}

export default BodyHomeSuggestMovies
