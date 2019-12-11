import React from 'react'

import CardGrid from '../../components/card-grid/card-grid.component'
import Card from '../../components/card/card.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'
// import { DragDropContext } from 'react-beautiful-dnd'


import './bubble-sort.styles.scss'
import Instructions from '../../components/instructions/instruction.component'

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
    
const CARD_COLOR = [
    "yellow-card",
    "purple-card",
    "blue-card",
    "light-blue-card"
]
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const createArray = (minCards, maxCards, minValue, maxValue) => {
    var numCard = getRandomNumber(4, 8);
    const list = []
    for (let i = 0; i < numCard; i++) {
        var content = getRandomNumber(1, 100);
        var color = CARD_COLOR[getRandomNumber(0, 3)]
        list.push({
            id: "item-" + content + getRandomNumber(1, 10000),
            value: content,
            color: color
        })

    }
    return list

}

class BubbleSortPage extends React.Component {
    constructor(props) {
        super(props)
        var cards = createArray(3, 10, 1, 100)
        this.state = {
            addCard: "",
            instructions: BUBBLE_INSTRUCTION,
            instructionId: 0,
            cards: cards,
            guessCards: cards
        }
        
    }
    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getCard = () => {
        return this.state.cards
    } 
    sortList = () => {
        const unsortedList = this.state.cards
        for (const [index] of unsortedList.entries()) {
            if (unsortedList[index + 1] != null) {
                if (unsortedList[index].value > unsortedList[index + 1].value) {
                    var temp = unsortedList[index]

                    unsortedList[index] = unsortedList[index + 1]
                    unsortedList[index + 1] = temp
                }
            }
        }

        this.setState({ cards: unsortedList })
    }
    isSorted = () => {
        const list = []
        const compareList = []

        for (const [ value] of this.state.cards.entries()) {
            list.push(value.value);
            compareList.push(value.value)
        }
        compareList.sort()
        for (var i = 0; i < list.length; i++) {
            if (list[i] !== compareList[i]) return
        }

        return true
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState(state => {
            const list = state.cards.push({
                value: state.addCard,
                color: CARD_COLOR[this.getRandomNumber(0, 3)]
            })

            return {
                list,
                addCard: "",
            }
        })
    }
    render() {
        const { cards } = this.state;
        const { instructions } = this.state;

        let isSorted = this.isSorted();
        return (
            <div className="bubble-sort">

                <div className="bubble-sort-header">
                    <Instructions steps={instructions}></Instructions>
                    <div className="card-list">
                        <form className="add-card" onSubmit={this.handleSubmit} >
                            <FormInput
                                label="Add Card"
                                name='addCard'
                                type='number'
                                handleChange={this.handleChange}
                                value={this.state.addCard}
                                required />
                            <CustomButton type="submit">+</CustomButton>
                        </form>
                        <div className="card-grid">
                            {
                                cards.map((card, index) => (
                                    <Card key={index} number={card.value} color={card.color}></Card>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="wrapper">


                </div>
                <CardGrid cards={this.getCard()}></CardGrid>

                {isSorted ?
                    <h1>SORTED!</h1> :
                    <button onClick={this.sortList}>SORT!</button>
                }

            </div>
        );
    }
}

export default BubbleSortPage