import  React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchingResultPage.css';
import SearchingPoster1 from '../Assets/Images/searching-poster-1.png';
import SearchingPoster2 from '../Assets/Images/searching-poster-2.png';
import SearchingResultImg from '../Assets/Images/searching-result.png';
import BodyHomeMovie from './BodyHomeMovie';
import {findImage} from '../Images';

function SearchingResultPage({search}) {
    // const [inputSearch, setInputSearch] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [arr, setArr] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if(search !== "") {
            axios.get(`http://localhost:5000/phim/:${search}`)
            .then(res => {
                console.log(res);
                setSearchList([...res.data.recordset]);
            })
            .catch(err => console.log(err));console.log(search)
        }
    }, [search]); 
    
    useEffect(() => {
        setArr([...searchList.slice(0, 10)]);
    }, [searchList])
    
    const handlePaging = (index) => {
        if(index + 1 === Math.ceil(searchList.length/10)) {
          setArr([...searchList.slice(index*10)]);
        } else {
          setArr([...searchList.slice(index*10, index*10 + 10)]);
        }
        setPage(index);
    }
    
    const handlePrevious = () => {
        if(page > 0) handlePaging(page - 1);
    }
    
    const handleNext = () => {
        if(page < Math.floor(searchList.length/10)) handlePaging(page + 1);
    }

    return (
        <div className="searchingResult-container">
            <div className="searchingResult">
                <img className="searchingResult__header-image" src={SearchingResultImg} alt=""/>
                <h2 className="searchingResult__header">KẾT QUẢ TÌM KIẾM</h2>
                <span className="searchingResult__keyword">Từ khóa: {search}</span>
                <div className="searchingResult__wrap">
                    <div className="searchingResult__movies">
                        {arr.map((item, index) => (
                            <BodyHomeMovie
                                key={index}
                                img={findImage(item.TENPHIM)}
                                name={item.TENPHIM} 
                                age={item.DOTUOI} 
                                type={item.THELOAI}
                                description={item.MOTA} 
                            />
                        ))}
                    </div>

                    <div className="bodyHomePageNumber">        
                        <i className="fas fa-angle-left" onClick={handlePrevious}></i>
                        <ul className="bodyHomePageNumber_list">
                        {Array(Math.ceil(searchList.length/10)).fill().map((_, index) => (
                            <li 
                            key={index} 
                            onClick={() => handlePaging(index)}
                            className={page === index ? "onPage" : ""}
                            >
                            {index+1}
                            </li>
                        ))}
                        
                        </ul>       
                        <i className="fas fa-angle-right" onClick={handleNext}></i>  
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SearchingResultPage
