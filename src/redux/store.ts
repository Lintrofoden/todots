import { createStore, combineReducers } from 'redux';
import { TodoReducer, } from './reducers/TodoReducer';
import { UsersReducer } from './reducers/UsersReducer';
import { TrelloReducer } from './reducers/TrelloReducer';
import { IReducers } from './Interfaces';

const reducers = combineReducers<IReducers>({
    todos: TodoReducer,
    users: UsersReducer,
    trello: TrelloReducer
})

const store = createStore(reducers)

export default store;