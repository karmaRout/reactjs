
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './component/todoList/todoList';
import CompleteList from './component/completeList/completeList';
import TodoManageList from './component/todoManageList/todoManageList'
//import todo from './component/todoList';
class App extends Component {
  constructor(props){
    super(props);
  }
  handleEvent(){
    console.log(this.props);
    this.state = {
      newTodo: '',
      todos: [
        {
          text: 'Assignment',
          isComplete: false
        },
        {
          text: 'Nothing to do',
          isComplete: false
        },
        {
          text: 'Registration for new semister',
          isComplete: false
        },
        {
          text: 'Buy daily items from new market',
          isComplete: false
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <TodoManageList/>
        <CompleteList/>
      </div>
    );
  }
}

// export default App;
// function App() {
//   return (
//     <div>
//     <Todolist text='abc'/>
//     <CompleteList/>
//     <TodoManageList/>
//     </div>
//   );
// }

export default App;
