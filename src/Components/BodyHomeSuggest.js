import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BodyHomeSuggest.css';
import BodyHomeSuggestMovies from './BodyHomeSuggestMovies';

function BodyHomeSuggest() {
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
    <div className="bodyHomeSuggest">
      <div className="bodyHomeSuggest_wrap">
        <div className="bodyHomeSuggest_block">
          <h2 className="bodyHomeSuggest_title">Phim hay đề xuất</h2>
          <div className="bodyHomeSuggest_type">
            <div className="bodyHomeSuggest_choice">
              <span>{type}</span>
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="bodyHomeSuggest_space"></div>
            <div className="bodyHomeSuggest_allType">
              <div className="bodyHomeSuggest_col">
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
              <div className="bodyHomeSuggest_col">
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

        <Link to="/categories" className="watchFull">Xem tất cả</Link>
      </div>
      
      
      <BodyHomeSuggestMovies />
    </div>
  )
}

export default BodyHomeSuggest
