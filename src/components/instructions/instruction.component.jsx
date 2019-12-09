import React from 'react'

import './instruction.styles.scss'

class Instructions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            steps: props.steps,
        }
    }
    render(){
        // let instruction = this.state.steps[this.state.index] 
        const { steps } = this.state
        return(
            <div className="instructions"> 
            {
                steps.map((step, index) => (
                    <div key={index} className="instruction">{step}</div>
                ))
            }
            </div>
        )
    }
} 

export default Instructions