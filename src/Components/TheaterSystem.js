import React from 'react';
import Creator from './Creator';
import './TheaterSystem.css';
import Dan from '../Assets/Images/Dan.png';
import ThaoDao from '../Assets/Images/ThaoDao.png';
import TheThien from '../Assets/Images/TheThien.png';
import TuanLe from '../Assets/Images/TuanLe.png';
import HungPho from '../Assets/Images/HungPho.png';
import TheaterGroup1 from './TheaterGroup1';
import TheaterGroup2 from './TheaterGroup2';
import system1 from '../Assets/Images/Rectangle 406.png';
import system2 from '../Assets/Images/uitheater giường nằm.png';
import system3 from '../Assets/Images/uitheater max hd.png';
import system4 from '../Assets/Images/uitheater bình dương.png';
import system5 from '../Assets/Images/uitheater sinh viên.png';

function TheaterSystem() {

  const listSystems = [system1, system2, system3, system4, system5];

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
    img: TheThien,
    name: "Thế Thiện",
    position: "Studios & Distribution",
    color: "#D1A67C",
  }, {
    img: HungPho,
    name: "Hưng Phò",
    position: "Cinemas & Service",
    color: "#F5859E",
  }];

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
        <TheaterGroup1 img={listSystems[0]}/>
        <TheaterGroup2 img={listSystems[1]}/>
        <TheaterGroup1 img={listSystems[2]}/>
        <TheaterGroup2 img={listSystems[3]}/>
        <TheaterGroup1 img={listSystems[4]}/>
      </div>
    </div>
  )
}

export default TheaterSystem