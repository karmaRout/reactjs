import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './component/todoList/todoList';
import CompleteList from './component/completeList/completeList';
import TodoManageList from './component/todoManageList/todoManageList'
//import todo from './component/todoList';

function App() {
  return (
    <div>
    <Todolist/>
    <CompleteList/>
    <TodoManageList/>
    </div>
  );
}

export default App;
