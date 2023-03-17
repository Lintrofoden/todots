//Для redux
//Для TodoReducer
export interface ITodoReducerState{
    listOfItems: Array<IItem>,
}

export interface IItem{
    id: number,
    text: string
}

export interface ITodoReducerAction{
    type: string,
    // payload: ITodoReducerState,
    payload: IItem,
}

//Для UsersReducer

export interface IUsersReducerState{
    usersList: Array<IUsersList>
}

export interface IUsersList{
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdress,
    phone: string,
    website: string,
    company: ICompany,
}

interface IAdress{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo,
}

interface IGeo{
    lat: string,
    lng: string,
}

interface ICompany{
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IUsersReducerAction{
    type: string,
    payload: Array<IUsersList>,
}
// Для Trello

export interface ITrelloReducerState{
    listOfColumns: Array<IColumn>
}

export interface IColumn{
    id: number,
    title: string,
    listOfDeals: Array<IDeal>
}

export interface IDeal{
    id: number,
    title: string,
}

export interface ITrelloReducerAction{
    type: string,
    action: Array<IColumn> | IColumn
}

//CombineReducers
export interface IReducers{
    todos: ITodoReducerState,
    users: IUsersReducerState,
    trello: ITrelloReducerState
}
