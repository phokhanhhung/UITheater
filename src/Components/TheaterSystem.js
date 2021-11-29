import React from 'react';
import Creator from './Creator';
import './TheaterSystem.css';
import Dan from '../Assets/Images/Dan.png';
import ThaoDao from '../Assets/Images/ThaoDao.png';
import ThienThanh from '../Assets/Images/ThienThanh.png';
import TuanLe from '../Assets/Images/TuanLe.png';
import HungPho from '../Assets/Images/HungPho.png';
import TheaterGroup1 from './TheaterGroup1';
import TheaterGroup2 from './TheaterGroup2';

function TheaterSystem() {

  const creators = [{
    img: Dan,
    name: "Nguyễn Duy An",
    position: "C.E.O Communication",
    color: "#0474C6",
  }, {
    img: ThaoDao,
    name: "Thảo Đào",
    position: "Event & Activation",
    color: "#2CA05A",
  }, {
    img: TuanLe,
    name: "Tuấn Lê",
    position: "Marketing & Entertainment",
    color: "#E25050",
  }, {
    img: ThienThanh,
    name: "Thiên Thanh",
    position: "Studios & Distribution",
    color: "#D1A67C",
  }, {
    img: HungPho,
    name: "Hưng Phò",
    position: "Cinemas & Service",
    color: "#F5859E",
  }]

  return (
    <div className="theaterSystem">
      <h2>NHÀ SÁNG LẬP</h2>
      <p>UITheater Cinema là một trong những chuỗi dự án đã được hoàn thành bởi 
      những con người dưới đây. Với họ lĩnh vực giải trí là lĩnh vực mà họ luôn 
      đánh giá cao và đầu tư tiền bạc lẫn thời gian, chất xám của mình để đưa 
      UITheater vươn tầm quốc tế.</p>
      <div className="theaterSystem__creaters">
        {creators.map((item, index)  => (
          <div key={index} className="theaterSystem__creater">
            <Creator 
              img={item.img}
              name={item.name}
              position={item.position}
              color={item.color}
            />
          </div>
        ))}
      </div>

      <h2>CỤM RẠP</h2>
      <div className="theaterSystem__group">
        <TheaterGroup1 />
        <TheaterGroup2 />
        <TheaterGroup1 />
        <TheaterGroup2 />
        <TheaterGroup1 />
      </div>
    </div>
  )
}

export default TheaterSystem