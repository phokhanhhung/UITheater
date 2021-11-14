import React from 'react'
import './TheaterTechnologyItem.css'

function TheaterTechnologyItem({src, title, desc}) {

    return (
        <div className="theater-technology-item">
            <img src={src} alt="img" className="theater-technology-item-img" />
            <div className="theater-technology-item-content">
                <div className="theater-technology-item-content-title"><p>{title}</p></div>
                <div className="theater-technology-item-content-desc">
                    <p>{desc[0]}</p>
                    <br />
                    <p>{desc[1]}</p>
                    <br />
                    <p>{desc[2]}</p>
                </div>
            </div>
        </div>
    )
}

export default TheaterTechnologyItem
