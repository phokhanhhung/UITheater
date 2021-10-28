import React, {forwardRef} from 'react';
import './BodyHomeMovie.css';
import wonderwoman from '../Assets/Images/woderwoman-12.png';

function BodyHomeMovie({height, width, wrapWidth, name, age, type, description, padding}, ref) {

  return (
    <div 
      className="bodyHomeMovie_wrap"        
      style={{width: wrapWidth+"%"}}
    >
      <div 
        ref={ref}
        className="bodyHomeMovie" 

      >
        <img src={wonderwoman} alt="#" style={{height: height+"px"}}/>

        <div 
          className="bodyHomeMovie_infor"
          style={{
            height: height+"px",
            width: width+"px",
          }}
        >
          <h3>{name}</h3>
          <h4><span>{age}</span>{type}</h4>
          <p>{description}</p>
          <button className="bodyHomeMovie_buy">Mua vé</button>
          <button className="bodyHomeMovie_more">Xem thêm</button>
        </div>
      </div>
    </div>
    
  )
}

export default forwardRef(BodyHomeMovie)
