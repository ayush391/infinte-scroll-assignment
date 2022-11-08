import React from 'react'

import './style/card.css'

const Card = (props) => {
    const name = props.title + " " + props.first + " " + props.last
    return (
        <div className='col-lg-3 card-container'>
            <div className='person-container' key={props.id}>
                <img className='person-img' src={props.img} alt='not found'></img>
                <h5 className='person-name'>{name}</h5>
            </div>
        </div>
    )
}

export default Card