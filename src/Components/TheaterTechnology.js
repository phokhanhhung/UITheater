import React from 'react'
import './TheaterTechnology.css'
import TheaterTechnologyItem from './TheaterTechnologyItem'

import TheaterTechnologyItemImage from '../Assets/Images/theater-technology-item.png'

function TheaterTechnology() {
    return (
        <div className="theater-technology">
            <TheaterTechnologyItem 
                src={TheaterTechnologyItemImage}
                title="CÔNG NGHỆ 3D"
                desc={['Công nghệ 3D Digital (Kỹ thuật số 3 chiều) cho phép khán giả cảm nhận thêm chiều sâu của hình ảnh, giúp cho không gian điện ảnh trở nên sống động như không gian thực mà chúng ta đang sống.', 
                       'Phim 3D được quay từ tối thiểu hai máy cùng một lúc, từ hai góc nhìn khác nhau tương ứng với hoạt động của hai mắt người. Khi xem phim khán giả sẽ cần đeo kính 3D để lọc hình ảnh cho mỗi mắt.', 
                       'Các phòng chiếu phim 3D Digital sử dụng màn hình trắng bạc giảm hao hụt ánh sáng một cách tối đa.'
                      ]}
            />
            <TheaterTechnologyItem 
                src={TheaterTechnologyItemImage}
                title="SWEET BOX"
                desc={['Cinestar có thể mang đến cho bạn những giây phút thư giãn cùng những bộ phim hấp dẫn trong không gian nhẹ nhàng, ấm áp cùng người yêu thương và gia đình. Hãy tận hưởng những giây phút ngọt ngào nhất tại UITheater bằng ghế đôi Sweet Box.', 
                       'Sweet Box được đặt ở hàng ghế cuối cùng trong phòng chiếu. Với vách ngăn cao cũng như sự khéo léo trong thiết kế giấu đi tay gác chính giữa giúp cho đôi bạn càng thêm gần gũi và ấm áp, tạo không gian hoàn hảo cho các cặp đôi. Hãy đến và trải nghiệm không gian hoàn hảo của các tình yêu với Sweet Box'
                      ]}
            />
            <TheaterTechnologyItem 
                src={TheaterTechnologyItemImage}
                title="DOLBY ATMOS"
                desc={['Cinestar có thể mang đến cho bạn những giây phút thư giãn cùng những bộ phim hấp dẫn trong không gian nhẹ nhàng, ấm áp cùng người yêu thương và gia đình. Hãy tận hưởng những giây phút ngọt ngào nhất tại UITheater bằng ghế đôi Sweet Box.', 
                       'Sweet Box được đặt ở hàng ghế cuối cùng trong phòng chiếu. Với vách ngăn cao cũng như sự khéo léo trong thiết kế giấu đi tay gác chính giữa giúp cho đôi bạn càng thêm gần gũi và ấm áp, tạo không gian hoàn hảo cho các cặp đôi. Hãy đến và trải nghiệm không gian hoàn hảo của các tình yêu với Sweet Box'
                      ]}
            />
            <TheaterTechnologyItem 
                src={TheaterTechnologyItemImage}
                title="MÁY CHIẾU BARCO"
                desc={['Cinestar có thể mang đến cho bạn những giây phút thư giãn cùng những bộ phim hấp dẫn trong không gian nhẹ nhàng, ấm áp cùng người yêu thương và gia đình. Hãy tận hưởng những giây phút ngọt ngào nhất tại UITheater bằng ghế đôi Sweet Box.', 
                       'Sweet Box được đặt ở hàng ghế cuối cùng trong phòng chiếu. Với vách ngăn cao cũng như sự khéo léo trong thiết kế giấu đi tay gác chính giữa giúp cho đôi bạn càng thêm gần gũi và ấm áp, tạo không gian hoàn hảo cho các cặp đôi. Hãy đến và trải nghiệm không gian hoàn hảo của các tình yêu với Sweet Box'
                      ]}
            />
        </div>
    )
}


export default TheaterTechnology
