import React, {forwardRef} from 'react';
import './BodyHomeMovie.css';
import wonderwoman from '../Assets/Images/woderwoman-12.png';

function BodyHomeMovie({name, age, type, description}, ref) {

  return (
    <div 
      className="bodyHomeMovie_wrap"        
    >
      <div 
        ref={ref}
        className="bodyHomeMovie" 
      >
        <img src={wonderwoman} alt="#"/>

        <div 
          className="bodyHomeMovie_infor"
        >
          <h3>{name}</h3>
          <h4><span>{age}</span>{type}</h4>
          <p>{description}</p>
          <button className="bodyHomeMovie_buy"><i className="fas fa-cart-arrow-down"></i>Mua vé</button>
          <button className="bodyHomeMovie_more"><i className="fas fa-exclamation-circle"></i>Xem thêm</button>
        </div>
      </div>
    </div>
    
  )
}

export default forwardRef(BodyHomeMovie)
