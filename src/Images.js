import RayaandThelastdragon from './Assets/Images/raya-12.png';
import Woderwoman from './Assets/Images/woderwoman-12.png';
import Aladdin from './Assets/Images/aladdin-12.png';
import BanTayDietQuy from './Assets/Images/bantaydietquy-12.png';
import BoGia from './Assets/Images/bogia-12.png';
import ChienBinhCuoiCung from './Assets/Images/chienbinhcuoicung-12.png';
import Conan from './Assets/Images/conan-12.png';
import FreeGuy from './Assets/Images/freeguy-12.png';
import KingKong from './Assets/Images/kinhkong-12.png';
import LatMat from './Assets/Images/latmat-12.png';

const image = [
  {name: "Raya and The last dragon", src: RayaandThelastdragon}, 
  {name: "Wonder woman", src: Woderwoman},
  {name: "Free guy", src: FreeGuy},
  {name: "Aladdin", src: Aladdin},
  {name: "Bàn tay diệt quỷ", src: BanTayDietQuy},
  {name: "Bố già", src: BoGia},
  {name: "Chiến binh cuối cùng", src: ChienBinhCuoiCung},
  {name: "Thám tử lừng danh Conan", src: Conan},
  {name: "King Kong", src: KingKong},
  {name: "Lật mặt", src: LatMat},
]; 

const findImage = (name) => {
  for(var item of image) {
    if(item.name === name) {
      return item.src;
    }
  }
  return null;
}

export {findImage};