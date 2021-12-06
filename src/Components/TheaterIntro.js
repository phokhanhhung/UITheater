import React from 'react';
import './TheaterIntro.css';
import theater from '../Assets/Images/theater.png';
import BodyHomeNav from './BodyHomeNav';
import { Route } from 'react-router';
import TheaterSystem from './TheaterSystem';
import TheaterService from './TheaterService';
import TheaterTechnology from './TheaterTechnology';
let i = 0;
function TheaterIntro() {
  if (i === 0) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    i++;
  }
  return (
    <div className="theaterIntro-background-color1">
      <div className="theaterIntro-background-img">
        <div className="theaterIntro-background-color2">
          <div className="theaterIntro">
            <h1>GIỚI THIỆU</h1>
            <div className="theaterIntro__brand">
              <img src={theater} alt="Movie Theater" />
              <div className="theaterIntro__info">
                <h2>RẠP CHIẾU PHIM UITheater</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Aliquam habitant suscipit purus scelerisque egestas habitant libero nulla orci.</p>
                <p>Vel a, nunc sem porta tempus eu et lobortis vitae.</p>
              </div>
            </div>

            <div className="theaterIntro__movie-theaters">
              <div className="theaterIntro__movie-theaters-background">
                <BodyHomeNav 
                  preStage="/home"
                  stage1="hethong"
                  stage2="congnghe"
                  stage3="dichvu"
                  title1="HỆ THỐNG UITHEATER"
                  title2="CÔNG NGHỆ SỬ DỤNG"
                  title3="DỊCH VỤ"
                />
                <Route exact path="/"><TheaterSystem /></Route>
                <Route exact path="/home/hethong"><TheaterSystem /></Route>
                <Route exact path="/home/dichvu"><TheaterService /></Route>
                <Route exact path="/home/congnghe"><TheaterTechnology /></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default TheaterIntro
