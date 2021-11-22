import React from 'react';
import './BodyHome.css';
import { Route } from 'react-router-dom';
import BodyHomeNav from './BodyHomeNav';
import BodyHomeMovies from './BodyHomeMovies';
import BodyHomeSuggest from './BodyHomeSuggest';
import MovieIntro from './MovieIntro'
import HotMovies from './HotMovies'


function BodyHome() {
  return (
    <div className="bodyHome-wrapper">
      <div className="movie-intro-wrapper">
        <div className="wrap">
          <MovieIntro />
        </div>

        <div className="wrap">
          <HotMovies />
        </div>
      </div>
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
    </div>

  )
}

export default BodyHome
