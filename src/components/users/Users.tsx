import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { getUsersActionCreator, cleanUsersActionCreator } from "../../redux/ActionCreators";
import { IUsersReducerState, IReducers} from "../../redux/Interfaces";
import { Watch } from 'react-loader-spinner';
import classes from './Users.module.css';

const Users: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const value: IUsersReducerState = useSelector((state: IReducers) => state.users)

    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch(getUsersActionCreator(res.data))
                setIsLoading(false)
            });
         return () => {dispatch(cleanUsersActionCreator())}
    }, [dispatch])

    const users = value.usersList.map(item => <div key={item.id}>{item.name}</div>)
    
    return(
        <div className={classes.content}>
            {isLoading ? <div className={classes.loader}><Watch
                height="80"
                width="80"
                radius="48"
                color="black"
                ariaLabel="watch-loading"
                visible={true}
            /></div> : <div>{users}</div>}
        </div>
    )
}

export default Users;