import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classes from './Trello.module.css';

const Trello2 = () => {

    const [items, setItems] = useState([
        //обязательно ID строка
        {id: "1", title: 'Первое', listOfDeals: [{id: 12334, title: 'asd'}]},
        {id: "2", title: 'Второе', listOfDeals: [{id: 16546, title: 'hgjkh'}]},
        {id: "3", title: 'Третье', listOfDeals: [{id: 222222221, title: '345'}]},
    ]);

    const onDragEndHandler = (result: any) =>{
        if(!result.destination) return
        const array = Array.from(items)
        const [reorderedItem] = array.splice(result.source.index, 1)
        array.splice(result.destination.index, 0, reorderedItem)
        setItems(array)
    }
    
    return(
        <DragDropContext onDragEnd={onDragEndHandler}>
            <Droppable droppableId='items' direction='horizontal'>
                {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className={classes.content}>
                        {items.map(({id, title}, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                                <div className={classes.item} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    {title}
                                </div>
                            )}
                        </Draggable>))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>        
    )
}

export default Trello2