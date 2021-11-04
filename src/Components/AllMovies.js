import React, {useState} from 'react';
import './AllMovies.css';
import BodyHomeMovie from './BodyHomeMovie';

function AllMovies() {
  const [type, setType] = useState("Tất cả");
  const [bold1, setBold1] = useState();
  const [bold2, setBold2] = useState();

  var col1 = ["Tất cả", "Tình cảm", "Hài hước", "Kinh dị", "Hành động"];
  var col2 = ["Phiêu lưu", "Hoạt hình", "Trinh thám", "Trẻ em"];

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
          {Array(20).fill().map((_, index) => (
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
              item={_}
            />
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default AllMovies
