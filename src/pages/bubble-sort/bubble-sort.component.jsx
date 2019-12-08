import React from 'react'

import CardGrid from '../../components/card-grid/card-grid.component'
import Card from '../../components/card/card.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'
import Instructions from '../../components/instructions/instruction.component'

import './bubble-sort.styles.scss'

const INITIAL_ARRAY = [3, 2, 1]

const BUBBLE_INSTRUCTION = [
    "LETS LEARN ABOUT BUBBLE SORTING!",
    "1.Look at the first number in the list.",
    "2.Compare the current number with the next number.",
    "3.Is the next number smaller than the current number? If so, swap the two numbers around. If not, do not swap.",
    "4.Move to the next number along in the list and make this the current number.",
    "5.Repeat from step 2 until the last number in the list has been reached.",
    "6.If any numbers were swapped, repeat again from step 1",
    "7.If the end of the list is reached without any swaps being made, then the list is ordered and the algorithm can stop."
]

class BubbleSortPage extends React.Component {
    constructor(props) {
        super(props)
        const list = []
        var numCard = this.getRandomNumber(4, 10);

        for(let i = 0; i < numCard; i++ ){
            list.push(this.getRandomNumber(1, 100))
        }
        
        this.state = {
            addCard: "",
            instructions: BUBBLE_INSTRUCTION,
            instructionId: 0,
            cards: list
        }
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    sortList = () => {
        const unsortedList = this.state.cards
        const sortedList = []

        for (const [index, value] of unsortedList.entries()) {
            if (unsortedList[index + 1] != null) {
                if (unsortedList[index] > unsortedList[index + 1]) {
                    sortedList.push(unsortedList[index + 1])

                    var temp = unsortedList[index]

                    unsortedList[index] = unsortedList[index + 1]
                    unsortedList[index + 1] = temp
                }
                else {
                    sortedList.push(unsortedList[index])
                }
            }
            else {
                sortedList.push(unsortedList[index])
            }
        }

        this.setState({ cards: sortedList })
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
    }
    render() {
        const { cards } = this.state
        const { instructionId } = this.state

        return (
            <div className="bubble-sort">
                <div className="wrapper">
                    <form className="add-card" onSubmit={this.handleSubmit} >
                        <FormInput
                            label="Add Card"
                            name='addCard'
                            type='number'
                            handleChange={this.handleChange}
                            value={this.state.addCard}
                            required />
                        <CustomButton
                            type="submit">
                            +
                        </CustomButton>
                    </form>
                    <h1>
                        {
                            this.state.instructions[instructionId]
                        }
                    </h1>
                </div>
                <div className="card-grid">
                    {
                        cards.map((card, index) => (
                            <Card key={index} number={card}></Card>
                        ))
                    }
                </div>
                <button
                    onClick={this.sortList}>
                    SORT!
                </button>
            </div>
        );
    }
}

export default BubbleSortPage