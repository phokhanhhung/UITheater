import React, { forwardRef } from 'react';
import './BodyHomeSuggestMovie.css';
import wonderwoman from '../Assets/Images/woderwoman-12.png';

function BodyHomeSuggestMovie({height, wrapWidth}, ref) {
  return (
    <div 
      className="bodyHomeSuggestMovie" 
      ref={ref}
    >
      <img src={wonderwoman} alt="#" style={{height: height+"px"}}/>
    </div>
  )
}

export default forwardRef(BodyHomeSuggestMovie)
