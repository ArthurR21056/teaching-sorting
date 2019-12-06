import React from 'react'
import CardGrid from '../../components/card-grid/card-grid.component'

import './bubble-sort.styles.scss'

class BubbleSortPage extends React.Component {
    constructor() {
        super()

        this.state = {
            cards:[5,3,2,1,7,8]
        }
    }

    render(){
        const {cards} = this.state
        return(
            <div className="bubble-sort">
                <CardGrid cards={cards}/>
            </div>
        );
    }
}

export default BubbleSortPage