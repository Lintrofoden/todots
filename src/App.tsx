import React from 'react';
import Todos from './components/todos/Todos';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';
// import Trello1 from './components/trello/Trello1';
import Trello2 from './components/dragndrop/Trello2';
import Homepage from './components/homepage/Homepage';
import classes from './App.module.css';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className={classes.content}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
        <Route path='/dragndrop' element={<Trello2 />} />
      </Routes>
    </div>
  );
}

export default App;
