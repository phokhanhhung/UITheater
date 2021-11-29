import React, { useEffect, useState } from 'react'
import './Header.css'
import Navigation from './Navigation'

import SignIn from './SignIn'
import SignUp from './SignUp'

function Header({handleSearch}) {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [search, setSearch] = useState('');

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

    const childState = (state) => {
        setSearch(state);
    }

    useEffect(() => {
        handleSearch(search);
        console.log(search);
    }, [search]);

    return (
        <div className="header">
            <div className="navigation">
                <div className="wrap">
                    <Navigation 
                        handleShowSignIn1={childShowSignIn1} 
                        handleShowSignUp1={childShowSignUp1}
                        parentSearch={childState}
                    />
                </div>
            </div>

            

            {showSignIn && <SignIn handleShowSignIn2={childShowSignIn2} />} 
            {showSignUp && <SignUp handleShowSignUp2={childShowSignUp2} />}
        </div>
    )
}

export default Header
