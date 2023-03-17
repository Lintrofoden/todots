import { DndContext, useSensor, PointerSensor, closestCenter, closestCorners, rectIntersection, pointerWithin, MeasuringStrategy} from "@dnd-kit/core"
import { SortableContext, horizontalListSortingStrategy, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import React, { useState } from "react";
import Item from "./Item";
import { useSelector } from "react-redux"
import { ITrelloReducerState, IReducers } from "../../redux/Interfaces";
import classes from './Trello.module.css';

const Trello1 = () => {

    const [items, setitems] = useState([
        {id: 1, title: 'Первое', listOfDeals: [{id: 12334, title: 'asd'}]},
        {id: 2, title: 'Второе', listOfDeals: [{id: 16546, title: 'hgjkh'}]},
        {id: 3, title: 'Третье', listOfDeals: [{id: 222222221, title: '345'}]},
    ]);

    

    const measuringConfig = {
        droppable: {
          strategy: MeasuringStrategy.Always,
        }
      };

    const sensors = [useSensor(PointerSensor)];

    const handlerDragEnd = ({active, over}: any ) =>{
        if(active.id !== over.id){
            setitems(() => {
                const oldIndex = items.findIndex(item => item.id === active.id)
                const newIndex = items.findIndex(item => item.id === over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    const handlerDragStart = () =>{
        console.log(items)
    }

    // const value: ITrelloReducerState = useSelector((state: IReducers) => state.trello);
    //
    // console.log(value.listOfColumns)
    // const a = value.listOfColumns.map((item) => <span key={item.id} className={classes.item}>{item.title}</span>);
//measuring={measuringConfig}
    return(
        <div className={classes.content}> 
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handlerDragEnd} onDragStart={handlerDragStart} measuring={measuringConfig}>
                <SortableContext items={items.map((item) => item.id)} strategy={horizontalListSortingStrategy}>
                    {items.map((item) => <Item {...item} key={item.id} />)}
                </SortableContext>
            </DndContext>
        </div>
    )
}

export default Trello1
