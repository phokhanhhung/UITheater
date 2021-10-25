import React from 'react'
import './Header.css'
import Navigation from './Navigation'
import MovieIntro from './MovieIntro'
import HotMovies from './HotMovies'

function Header() {
    return (
        <div className="header">
            <div className="navigation">
                <div className="wrap">
                    <Navigation />
                </div>
            </div>

            <div className="wrap">
                <MovieIntro />
            </div>

            <div className="wrap">
                <HotMovies />
            </div>
        </div>
    )
}

export default Header
