import React from 'react'

import './card.styles.scss'
const Card = (props) => {
    const color = props.color + " card"
    return (
        <div className={color}>
            <h1>{props.number} </h1>
        </div>
    )

}



export default Card