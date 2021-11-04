import React, { useEffect, useState } from 'react'
import './Header.css'
import Navigation from './Navigation'
import MovieIntro from './MovieIntro'
import HotMovies from './HotMovies'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Header() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    //Nhấn đăng nhập thì hiện form Sign in
    const childShowSignIn1 = (a) => {
        setShowSignIn(a);
    }

    //Nhấn dấu x hoặc bấm ra vùng đen trong form Sign in thì ẩn form
    const childShowSignIn2 = (b) => {
        setShowSignIn(b);
    }

    //Nhấn đăng nhập thì hiện form Sign up
    const childShowSignUp1 = (a) => {
        setShowSignUp(a);
    }

    //Nhấn dấu x hoặc bấm ra vùng đen trong form Sign up thì ẩn form
    const childShowSignUp2 = (b) => {
        setShowSignUp(b);
    }

    return (
        <div className="header">
            <div className="navigation">
                <div className="wrap">
                    <Navigation handleShowSignIn1={childShowSignIn1} handleShowSignUp1={childShowSignUp1}/>
                </div>
            </div>

            <div className="wrap">
                <MovieIntro />
            </div>

            <div className="wrap">
                <HotMovies />
            </div>

            {showSignIn && <SignIn handleShowSignIn2={childShowSignIn2} />} 
            {showSignUp && <SignUp handleShowSignUp2={childShowSignUp2} />}
        </div>
    )
}

export default Header
