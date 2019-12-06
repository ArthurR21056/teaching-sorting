import React from 'react'

import './card.styles.scss'
const Card = ({number}) => 
(
    <div className='card'>
        <h1>{number}</h1>
    </div>
)

export default Card