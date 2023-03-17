import { SET_USERS, CLEAN_USERS } from '../Consts'
import {  IUsersReducerState, IUsersReducerAction } from '../Interfaces'

const initState: IUsersReducerState = {
    usersList: []
}

export const UsersReducer = (state: IUsersReducerState = initState, action: IUsersReducerAction) =>{
    switch(action.type){
        case SET_USERS: {
            let stateCopy = {...state}
            stateCopy.usersList = [...action.payload]
            return stateCopy
        }
        case CLEAN_USERS: {
            let stateCopy = {...state}
            stateCopy.usersList = []
            return stateCopy
        }
    }
    return state;
}