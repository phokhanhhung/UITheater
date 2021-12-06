import React, { forwardRef } from 'react';
import './BodyHomeSuggestMovie.css';

function BodyHomeSuggestMovie({height, img}, ref) {
  return (
    <div 
      className="bodyHomeSuggestMovie" 
      ref={ref}
    >
      <img src={img} alt="#" style={{height: height+"px"}}/>
    </div>
  )
}

export default forwardRef(BodyHomeSuggestMovie)
