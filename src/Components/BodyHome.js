import React from 'react';
import './BodyHome.css';
import { Switch, Route } from 'react-router-dom';
import BodyHomeNav from './BodyHomeNav';
import BodyHomeMovies from './BodyHomeMovies';
import BodyHomeSuggest from './BodyHomeSuggest';

function BodyHome() {
  return (
    <div className="bodyHome">

      <BodyHomeNav
        preStage="/phim"
        stage1="dangchieu"
        stage2="sapchieu"
        stage3="dacbiet"
        title1="PHIM ĐANG CHIẾU"
        title2="PHIM SẮP CHIẾU"
        title3="SUẤT CHIẾU ĐẶC BIỆT"
       />
      <Route exact path="/phim">
        <BodyHomeMovies name="dangchieu" />
      </Route>

      <Route exact path="/phim/dangchieu">
        <BodyHomeMovies name="dangchieu" />
      </Route>

      <Route exact path="/phim/sapchieu">
        <BodyHomeMovies name="sapchieu" />
      </Route>

      <Route exact path="/phim/dacbiet">
        <BodyHomeMovies name="dacbiet" />
      </Route>
      <BodyHomeSuggest />
    </div>
  )
}

export default BodyHome
