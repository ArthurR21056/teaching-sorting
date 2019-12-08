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
        console.log(this.props.cards)
        const {cards} = this.state
        return(
            <div className="card-grid">
                {
                    cards.map((card, index) => (
                        <Card key={index}  number={card}></Card>
                    ))
                }
            </div>
        );
    }
}

export default CardGrid