import React from 'react'
import Card from '../card/card.component'

import './card-grid.styles.scss'

class CardGrid extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards: props.cards
        }
    }

    render(){
        const {cards} = this.state
        return(
            <div className="card-grid">
                {
                    cards.map(card => (
                        <Card key={card} number={card}></Card>
                    ))
                }
            </div>
        );
    }
}

export default CardGrid