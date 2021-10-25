import React from 'react';
import './BodyHome.css';
import BodyHomeNav from './BodyHomeNav';
import BodyHomeMovies from './BodyHomeMovies';
import BodyHomeSuggest from './BodyHomeSuggest';

function BodyHome() {
  return (
    <div className="bodyHome">
      <BodyHomeNav />
      <BodyHomeMovies />
      <BodyHomeSuggest />
    </div>
  )
}

export default BodyHome
