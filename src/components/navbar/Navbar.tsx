import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar: React.FC = () =>{
    return (
        <div className={classes.content}>
            <NavLink to='/' className={navData => navData.isActive ? classes['active-link'] : ''} >Home</NavLink>
            <NavLink to='/todos' className={navData => navData.isActive ? classes['active-link'] : ''} >Todos</NavLink>
            <NavLink to='/users' className={navData => navData.isActive ? classes['active-link'] : ''} >Users</NavLink>
            <NavLink to='/dragndrop' className={navData => navData.isActive ? classes['active-link'] : ''} >Drag'n'drop</NavLink>
        </div>
    )
}

export default Navbar;