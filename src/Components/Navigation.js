import React, {useState, useEffect} from 'react';
import './Navigation.css'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'

function Navigation({handleShowSignIn1, handleShowSignUp1, parentSearch}) {
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const navigation = document.querySelector('.navigation')

            if (window.scrollY > 1)
            {
                navigation.style.backgroundColor = '#000'
            } else {
                navigation.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
            }
        }

        window.addEventListener('scroll', handleScroll)
    })
    
    const handleSearch = () => {
        const change = document.querySelector('.nav-right-search-icon')
        const change2 = document.querySelector('.nav-right-search')
        
        change.style.display = 'none';
        change2.style.display = 'flex';
        
    }

    const handleOpenSearch = () => {
        parentSearch(inputSearch)
    }

    const handleClickNav = () => {
        const change = document.querySelector('.nav-right-search')
        const change2 = document.querySelector('.nav-right-search-icon')
        if (change.style.display === 'flex') {
            change.style.display = 'none';
            change2.style.display = 'inline-block';
        }
    }

    const handleSignIn = () => {
        handleShowSignIn1(true);
    }

    const handleSignUp = () => {
        handleShowSignUp1(true);
    }

    const handleActive = (e) => {
        const active = document.querySelector('.nav-left-item--active')

        active.classList.remove('nav-left-item--active')
        e.target.classList.add('nav-left-item--active')
    }

    return (
        <div className="nav" onClick={handleClickNav}>
            <div className="nav-left">
                <a href="/">
                    <img className="nav-left-logo-img" src={logo} alt="logo" />
                </a>
                <Link to="/">
                    <i className="nav-left-logo-icon fas fa-home nav-left-item--active" onClick={e => handleActive(e)}></i>
                </Link>
                
                <ul className="nav-left-list">
                    <li>
                        <Link to="/phim" className="nav-left-item" onClick={e => handleActive(e)}>PHIM</Link>
                    </li>
                    <li>
                        <Link to="/lichchieu" className="nav-left-item" onClick={e => handleActive(e)}>LỊCH CHIẾU</Link>
                    </li>
                    <li>
                        <Link to="/rap&giave" className="nav-left-item" onClick={e => handleActive(e)}>RẠP & GIÁ VÉ</Link>
                    </li>
                    <li>
                        <Link to="/news/" className="nav-left-item" onClick={e => handleActive(e)}>TIN TỨC</Link>
                    </li>
                    <li>
                        <Link to="/contact/" className="nav-left-item" onClick={e => handleActive(e)}>LIÊN HỆ</Link>
                    </li>
                </ul>
            </div>

            <div className="nav-right" onClick={e => e.stopPropagation()}>
                <i className="nav-right-search-icon fas fa-search" onClick={handleSearch}></i>
                <div className="nav-right-search">
                    <input className="search-input" placeholder="Tìm kiếm" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                    <Link to="/searching-page/">
                        <i className="nav-right-search-icon2 fas fa-search" onClick={handleOpenSearch}></i>
                    </Link>
                </div>
                <button className="nav-right-register" onClick={handleSignUp}>Đăng ký</button>
                <button className="nav-right-login" onClick={handleSignIn}>Đăng nhập</button>
            </div>

        </div>
    )
}

export default Navigation
