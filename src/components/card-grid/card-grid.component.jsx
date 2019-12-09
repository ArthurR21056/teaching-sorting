import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from '../card/card.component';
import './card-grid.styles.scss'


// // create random data
// const createArray = (minCards, maxCards, minValue, maxValue) => {
//     var numCard = getRandomNumber(4, 8);
//     const list = []
//     for (let i = 0; i < numCard; i++) {
//         var content = getRandomNumber(1, 100);
//         var color = CARD_COLOR[getRandomNumber(0, 3)]
//         list.push({
//             id: "item-" + content + color,
//             value: content,
//             color: color
//         })

//     }
//     return list

// }
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,
    
    // // change background colour if dragging
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : '',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
});

class CardGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.cards
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    componentDidMount(){
        
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                        >
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (

                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        ><Card number={item.value} color={item.color}>{item.color}</Card></div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default CardGrid;
