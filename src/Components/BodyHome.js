import React from 'react';
import './BodyHome.css';
import { Switch, Route } from 'react-router-dom';
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
        <BodyHomeNav />


        <Route exact path="/">
          <BodyHomeMovies name="dangchieu"/>
        </Route>

        <Route exact path="/home/dangchieu">
          <BodyHomeMovies name="dangchieu" />
        </Route>

        <Route exact path="/home/sapchieu">
          <BodyHomeMovies name="sapchieu" />
        </Route>

        <Route exact path="/home/dacbiet">
          <BodyHomeMovies name="dacbiet" />
        </Route>

        
        <BodyHomeSuggest />
      </div>
    </div>

  )
}

export default BodyHome
