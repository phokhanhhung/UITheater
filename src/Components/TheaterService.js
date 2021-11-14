import React from 'react';
import './TheaterService.css';
import Service from './Service';
import opera from '../Assets/Images/service-opera.png';
import kvc from '../Assets/Images/khu vui chơi.png';
import coffee from '../Assets/Images/coffee & tea.png';
import uitfood from '../Assets/Images/khu ẩm thực.png';
import spa from '../Assets/Images/beauty spa.png';
import uitime from '../Assets/Images/uitime-zone.png';

function TheaterService() {

  const listItems = [{
    img: opera,
    title: "NHÀ HÁT UIT OPERA HOUSE",
    text: "Ngoài UITheater Cinema, UIT cung cấp dịch vụ nhà hát nằm trong công trình Nhà Văn hóa Sinh viên, tọa lạc tại Làng Đại học Quốc gia TP.HCM - một trong những địa điểm hay lui tới của các bạn sinh viên, tại đây có các buổi diễn nghệ thuật đặc sắc." 
  }, {
    img: kvc,
    title: "KHU VUI CHƠI UIT TRẺ EM",
    text: "Với diện tích hơn 800m2, sức chứa hơn 400 bé và hơn 60 trò chơi hấp dẫn, đầy màu sắc như Đệm nhún Đu quay, khu vực Tô màu, Hóa trang, Sân cát, Leo núi… phù hợp với các bé từ 3 – 12 tuổi là địa điểm lý tưởng để gia đình vui chơi cùng con yêu.",
  }, {
    img: coffee,
    title: "UITHEATER COFFEE AND TEA",
    text: "UITheater Coffee & Tea là một mô hình  mới khi có sự kết hợp giữa Rạp Chiếu Phim và  Coffee Shop - vừa sở hữu nét điện ảnh, vừa đậm chất nghệ thuật thưởng thức cà phê. Bạn có thể dùng nhiều loại thức uống giá trung bình từ 30.000đ - 50.000đ.",
  }, {
    img: uitfood,
    title: "KHU ẨM THỰC UIT FOOD",
    text: "Khu ẩm thực UIT Food có sức chứa 120 thực khách, phục vụ hơn 50 món ăn khác nhau. Khu ẩm thực UIT FOOD hân hạnh phục vụ khách đến xem phim hay muốn dùng bữa tại đây, mang đến trải nghiệm ẩm thực đa dạng các món ăn trong nước.",
  }, {
    img: spa,
    title: "UITHEATER BEAUTY SPA",
    text: "Ngoài UITheater Cinema, UIT cung cấp dịch vụ spa làm đẹp và thư giãn thu hút đông đảo các chị em phụ nữ đến đây. Tại đây có các dịch vụ như massage, trị mụn, làm nails, gội đầu,... với tông màu spa chủ đạo là hồng phấn trẻ trung, nữ tính.",
  }, {
    img: uitime,
    title: "KHU VUI CHƠI UITIME-ZONE",
    text: "Bên cạnh việc xem phim tại rạp, ngay gần kề UITheater còn cung cấp dịch vụ các trò chơi thu hút hàng vạn sinh viên như gắp thú, bắn cá, bắn súng, đập chuột,... Đây là địa điểm vui chơi hàng đầu của các cặp đôi mỗi dịp lễ như Valentine, Tết,...",
  }]

  return (
    <div className="theaterService">
      {listItems  .map((item, index) => (
        <div key={index} className="theaterService__block">
          <Service 
            img={item.img}
            title={item.title}
            text={item.text}
          />
        </div>
      ))}
    </div>
  )
}

export default TheaterService
