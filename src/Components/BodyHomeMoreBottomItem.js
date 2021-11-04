import React from 'react'
import MovieImg from '../Assets/Images/chienbinhcuoicung-12.png'
import './BodyHomeMoreBottomItem.css'

function BodyHomeMoreBottomItem() {
    return (
        <div className="bodyHomeMovie-more-bottom-more-list-item-wrapper">
            <li className="bodyHomeMovie-more-bottom-more-list-item">
                <img className="bodyHomeMovie-more-bottom-more-list-item-img" src={MovieImg} />
            </li>
        </div>
    )
}

export default BodyHomeMoreBottomItem
