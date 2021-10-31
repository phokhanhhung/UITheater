import React from 'react';
import './BodyHome.css';
import { Switch, Route } from 'react-router-dom';
import BodyHomeNav from './BodyHomeNav';
import BodyHomeMovies from './BodyHomeMovies';
import BodyHomeSuggest from './BodyHomeSuggest';

function BodyHome() {
  return (
    <div className="bodyHome">
      <BodyHomeNav />


      <Route exact path="/">
        <BodyHomeMovies />
      </Route>

      <Route exact path="/home/dangchieu">
        <BodyHomeMovies />
      </Route>

      <Route exact path="/home/sapchieu">
        <div>Sắp chiếu</div>
      </Route>

      <Route exact path="/home/dacbiet">
        <div>Đặc biệt</div>
      </Route>

      
      <BodyHomeSuggest />
    </div>
  )
}

export default BodyHome
