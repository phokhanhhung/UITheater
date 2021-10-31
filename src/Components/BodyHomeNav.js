import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BodyHomeNav.css';

function BodyHomeNav() {
  // const [move1, setMove1] = useState(true);
  // const [move2, setMove2] = useState(false);
  // const [move3, setMove3] = useState(false);

  // const handleClick1 = () => {
  //   if(move1 === true) setMove1(move1);
  //   else setMove1(!move1);
  //   setMove2(false);
  //   setMove3(false);
  // }

  // const handleClick2 = () => {
  //   if(move2 === true) setMove2(move2);
  //   else setMove2(!move2);
  //   setMove1(false);
  //   setMove3(false);
  // }

  // const handleClick3 = () => {
  //   if(move3 === true) setMove3(move3);
  //   else setMove3(!move3);
  //   setMove1(false);
  //   setMove2(false);
  // }
  var item1 = useRef();
  var item2 = useRef();
  var item3 = useRef();

  const [move, setMove] = useState(0)
  const handleClick1 = () => {
    setMove(item1.current.offsetLeft);
  }

  const handleClick2 = () => {
    setMove(item2.current.offsetLeft);
  }

  const handleClick3 = () => {
    setMove(item3.current.offsetLeft);
  }

  return (
    <div className="bodyHomeNav">
      <ul className="bodyHomeNav_item">
        <li onClick={handleClick1} ref={item1}><Link to="/home/dangchieu">PHIM ĐANG CHIẾU</Link></li>
        <li onClick={handleClick2} ref={item2}><Link to="/home/sapchieu">PHIM SẮP CHIẾU</Link></li>
        <li onClick={handleClick3} ref={item3}><Link to="/home/dacbiet">SUẤT CHIẾU ĐẶC BIỆT</Link></li>
      </ul>

      <div className="bodyHomeNav_pos" style={{left: move+"px"}}></div>
    </div>
  )
}

export default BodyHomeNav
