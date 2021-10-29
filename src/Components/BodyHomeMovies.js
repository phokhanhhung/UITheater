import React from 'react';
import './BodyHomeMovies.css';
import BodyHomeMovie from './BodyHomeMovie';

function BodyHomeMovies() {

  return (
    <div className="bodyHomeMovies_wrap">
      <div className="bodyHomeMovies">
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
        
        <div className="bodyHomePageNumber">        
          <i className="fas fa-angle-left"></i>
          <ul className="bodyHomePageNumber_list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li> 
          </ul>       
          <i className="fas fa-angle-right"></i>  
        </div>
      </div>
    </div>
    
  )
}

export default BodyHomeMovies
