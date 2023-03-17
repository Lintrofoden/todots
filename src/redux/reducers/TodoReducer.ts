import { ADD_ITEM, SET_TODOS } from '../Consts'
import { ITodoReducerState, ITodoReducerAction } from '../Interfaces'

const initState: ITodoReducerState = {
    listOfItems: []
}

export const TodoReducer = (state: ITodoReducerState = initState, action: ITodoReducerAction) =>{
    switch(action.type){
        case ADD_ITEM: {
            if (action.payload.text === ''){
                alert('Нельзя делать пустое дело')
                return state
            }
            let copyState = {...state}
            copyState.listOfItems = [...state.listOfItems]
            copyState.listOfItems.push(action.payload)
            return copyState
        }
        case SET_TODOS: {
            let copyState = {...state}
            copyState.listOfItems = [...state.listOfItems]
            copyState.listOfItems.splice(state.listOfItems.indexOf(action.payload), 1)
            return copyState
        }
    }
    return state;
}
