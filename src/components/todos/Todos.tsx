import React, { useState } from 'react';
import classes from './Todos.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItemActionCreator, setTodosActionCreator } from '../../redux/ActionCreators';
import { IItem, ITodoReducerState, IReducers } from '../../redux/Interfaces';

const TodosContainer: React.FC = () => {

    const [text, setText] = useState<string>('');

    const value: ITodoReducerState = useSelector((state: IReducers) => state.todos)

    const dispatch = useDispatch()

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>{
        setText(event.target.value)
    }

    const clickHandlerAdd = (itemInArray: IItem): void =>{
        dispatch(addItemActionCreator(itemInArray))
        setText('')
    }

    const clickHandlerRemove = (todoIndex: IItem): void =>{
        dispatch(setTodosActionCreator(todoIndex))
    }

    const todosList = value.listOfItems.map((item: IItem) => <div className={classes.todo_item} key={item.id}><div className={classes.text}>{item.text}</div><button onClick={() => {clickHandlerRemove(item)}}>-</button></div>);

    return (
        <div className={classes.content}>
            <div className={classes.textarea_and_button}>
                <textarea value={text} onChange={changeHandler}></textarea>
                <button onClick={() => clickHandlerAdd({ id: Date.now(), text })}>+</button>
            </div>
            <div className={classes.todo_list}>
                {todosList}
            </div>
        </div>
    );
}

export default TodosContainer

