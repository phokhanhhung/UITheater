import React, { useEffect, useRef } from 'react';
import "./BodyHomeSuggestMovies.css";
import BodyHomeSuggestMovie from './BodyHomeSuggestMovie';
import { useState } from 'react';
import RayaandThelastdragon from '../Assets/Images/raya-12.png';
import Woderwoman from '../Assets/Images/woderwoman-12.png';
import Aladdin from '../Assets/Images/aladdin-12.png';
import BanTayDietQuy from '../Assets/Images/bantaydietquy-12.png';
import BoGia from '../Assets/Images/bogia-12.png';
import ChienBinhCuoiCung from '../Assets/Images/chienbinhcuoicung-12.png';
import Conan from '../Assets/Images/conan-12.png';
import FreeGuy from '../Assets/Images/freeguy-12.png';
import KingKong from '../Assets/Images/kinhkong-12.png';
import LatMat from '../Assets/Images/latmat-12.png';
import Lalaland from '../Assets/Images/lalaland-12.png';
import OngNhiPhieuLuuKi from '../Assets/Images/ongnhiphieuluuky-12.png';

function BodyHomeSuggestMovies() {
  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);
  const [number, setNumber] = useState(0);

  // console.log(num, "outside");
  const listFilm = [RayaandThelastdragon, Woderwoman, Aladdin, BanTayDietQuy, BoGia, ChienBinhCuoiCung, Conan, FreeGuy, KingKong, LatMat, Lalaland, OngNhiPhieuLuuKi, RayaandThelastdragon, Woderwoman, Aladdin, BanTayDietQuy, BoGia, ChienBinhCuoiCung, Conan, FreeGuy, KingKong, LatMat, Lalaland, OngNhiPhieuLuuKi];

  const move = useRef();
  const movie = useRef();


  useEffect(() => {
    setNumber(Math.ceil(move.current.childNodes.length/7));
  }, [])

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(num, "effect");
    setTrans(-(move.current.offsetWidth)*num);

  }, [num]);

  const handleRightClick = () => {
    if(num < Math.floor(move.current.childNodes.length/7)) setNum((num) => num + 1);
    // console.log(num, "click");
  }

  const handleLeftClick = () => {
    if(num > 0) setNum((num) => num - 1);
    // console.log(num);
  }

  const handlePaging = (index) => {
    setNum(index);
  }

  return (
    <div className="bodyHomeSuggestMovie_wrap">
      <div className="bodyHomeSuggestMovies">
        <i className="fas fa-angle-left" onClick={handleLeftClick}></i>
          
        <div className="bodyHomeSuggest_wrapper">
          <ul 
            ref={move}
            className="bodyHomeSuggest_list" 
            style={{left: trans+"px"}}
          >
            {listFilm.map((item, index) => (
              <li key={index}>
                <BodyHomeSuggestMovie
                  ref={movie}
                  img={item}
                />
              </li>
            ))}  
          </ul> 
        </div>
              
        <i className="fas fa-angle-right" onClick={handleRightClick}></i> 
      </div>

      <div className="bodyHomeSuggestMovies_paging">
        {Array(number)
          .fill()
          .map((_, index) => (
            <span key={index} className={num===index ? "onPage" : ""} onClick={() => handlePaging(index)}></span>
        ))}
      </div>
    </div>
    
  )
}

export default BodyHomeSuggestMovies
