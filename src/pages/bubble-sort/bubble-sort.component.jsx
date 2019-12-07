import React from 'react'

import CardGrid from '../../components/card-grid/card-grid.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import './bubble-sort.styles.scss'

const INITIAL_ARRAY = [3,2,1]

class BubbleSortPage extends React.Component {
    constructor() {
        super()

        this.state = {
            addCard: "",
            cards:INITIAL_ARRAY
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState(state => {
            const list = state.cards.push(state.addCard)

            return {
                list,
                addCard: "",
            }
        })
        console.log(event)
    } 
    render(){
        const {cards} = this.state
        return(
            <div className="bubble-sort">
                <form className="add-card" onSubmit={this.handleSubmit} >
                    <FormInput 
                        label="Add Card"
                        name='addCard' 
                        type='number' 
                        handleChange={this.handleChange}
                        value={this.state.addCard} 
                        required/>
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
                <CardGrid cards={cards}/>
            </div>
        );
    }
}

export default BubbleSortPage