import React from 'react'
import './Navigation.css'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="nav">
            <div className="nav-left">
                <a href="/">
                    <img className="nav-left-logo-img" src={logo} alt="logo" />
                </a>
                <a href="/">
                    <i class="nav-left-logo-icon fas fa-home"></i>
                </a>
                
                <img className="nav-left-logo-img" src={logo} alt="logo" />
                <i className="nav-left-logo-icon fas fa-home"></i>
                <ul className="nav-left-list">
                    <li>
                        <Link to="/" className="nav-left-item">PHIM</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-left-item">LỊCH CHIẾU</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-left-item">RẠP & GIÁ VÉ</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-left-item">TIN TỨC</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-left-item">LIÊN HỆ</Link>
                    </li>
                </ul>
            </div>

            <div className="nav-right">
                <i className="nav-right-search-icon fas fa-search"></i>
                <button className="nav-right-register">Đăng ký</button>
                <button className="nav-right-login">Đăng nhập</button>
            </div>
        </div>
    )
}

export default Navigation
