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
  )
}

export default BodyHome
