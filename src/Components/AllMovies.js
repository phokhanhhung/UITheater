import React, {useState} from 'react';
import './AllMovies.css';
import BodyHomeMovie from './BodyHomeMovie';
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

function AllMovies() {
  const [type, setType] = useState("Tất cả");
  const [bold1, setBold1] = useState();
  const [bold2, setBold2] = useState();

  var col1 = ["Tất cả", "Tình cảm", "Hài hước", "Kinh dị", "Hành động"];
  var col2 = ["Phiêu lưu", "Hoạt hình", "Trinh thám", "Trẻ em"];

  const listFilm = [RayaandThelastdragon, Woderwoman, Aladdin, BanTayDietQuy, BoGia, ChienBinhCuoiCung, Conan, FreeGuy, KingKong, LatMat, Lalaland, OngNhiPhieuLuuKi, RayaandThelastdragon, Woderwoman, Aladdin, BanTayDietQuy, BoGia, ChienBinhCuoiCung, Conan, FreeGuy, KingKong, LatMat, Lalaland, OngNhiPhieuLuuKi];

  const handleClick1 = (index) => {
    setType(col1[index]);
    setBold1(index);
    setBold2(null);
  }

  const handleClick2 = (index) => {
    setType(col2[index]);
    setBold2(index);
    setBold1(null);
  }

  return (
    <div className="allMovies">
      <div className="allMovies_block">
        <h2 className="allMovies_title">Phim hay đề xuất</h2>
        <div className="allMovies_type">
          <div className="allMovies_choice">
            <span>{type}</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="allMovies_space"></div>
          <div className="allMovies_allType">
            <div className="allMovies_col">
              {col1.map((item, index) => (
                <p 
                  key={index} 
                  onClick={() => handleClick1(index)}
                  style={{fontWeight: index===bold1 ? "bold" : ""}}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="allMovies_col">
              {col2.map((item, index) => (
                <p 
                  key={index} 
                  onClick={() => handleClick2(index)}
                  style={{fontWeight: index===bold2 ? "bold" : ""}}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="allMovies_wrap">
        <div className="allMovies_movies">
          {listFilm.map((_, index) => (
            <BodyHomeMovie
              key={index}
              padding={20} 
              name="Raya and the last dragon" 
              age={13} 
              type="Trẻ em/Phiêu lưu"
              description="Raya và Rồng Thần Cuối Cùng kể về một vương quốc huyền bí có tên là Kumandra – vùng đất mà loài rồng và con người sống hòa thuận với nhau. Nhưng rồi một thế lực đen tối bỗng đe dọa bình yên nơi đây, loài rồng buộc phải hi sinh để cứu lấy loài người..."  
              height={300}
              width={207.7} 
              img={_}
              wrapWidth={20}
            />
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default AllMovies
