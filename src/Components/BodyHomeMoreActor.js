import React from 'react'
import ActorImg from '../Assets/Images/actor.png'
import './BodyHomeMoreActor.css'

function BodyHomeMoreActor({name}) {
    return (
        <li className="bodyHomeMovie-more-right-actor-body-item">
            <img className="bodyHomeMovie-more-right-actor-body-item-img" src={ActorImg}/>
            <p className="bodyHomeMovie-more-right-actor-body-item-name">{name}</p>
        </li>
    )
}

export default BodyHomeMoreActor
