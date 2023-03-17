import { ITrelloReducerState, ITrelloReducerAction } from '../Interfaces'

const initState: ITrelloReducerState = {
    listOfColumns: [
        {id: 1, title: 'Первое', listOfDeals: []},
        {id: 2, title: 'Второе', listOfDeals: []},
        {id: 3, title: 'Третье', listOfDeals: []},
    ]
}

export const TrelloReducer = (state: ITrelloReducerState = initState, action: ITrelloReducerAction) =>{
    switch(action.type){
        
    }
    return state;
}
