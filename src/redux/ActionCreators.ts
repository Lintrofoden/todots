import { ADD_ITEM, SET_TODOS, SET_USERS, CLEAN_USERS } from "./Consts";
import { IUsersList, IItem } from './Interfaces';

//Для Todo
export const addItemActionCreator = (item: IItem) =>{ //IItem
    return { type: ADD_ITEM, payload: item}
}

export const setTodosActionCreator = (todoindex: IItem) =>{ //IItem
    return { type: SET_TODOS, payload: todoindex}
}

//Для users
export const getUsersActionCreator = (UsersList: IUsersList) =>{
    return { type: SET_USERS, payload: UsersList}
}

export const cleanUsersActionCreator = () =>{
    return { type: CLEAN_USERS}
}

