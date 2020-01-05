
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
      ],
      completeData:[]
    };
    this.deleteCurrentItem = this.deleteCurrentItem.bind(this);
    this.completeCurrentItem = this.completeCurrentItem.bind(this);
    this.pushNewItem = this.pushNewItem.bind(this);
  }
  deleteCurrentItem(todo_index) {
    const updatedTodos = this.state.todos.map((todo,index) => {
            //debugger;
            if(index == todo_index) {
              //alert(this.state.todos[todo_index].text);
              var currIdx = this.state.todos[todo_index];
              const idx = this.state.todos.indexOf(currIdx);
              if (idx > -1) {
                this.state.todos.splice(idx, 1);
              }
                console.log('hii');
            }
            return todo;
            
      });
      this.setState(prevState => ({
        todos: updatedTodos
      }));
    }
    completeCurrentItem(todo_index) {
        const updatedTodos = this.state.todos.map((todo,index) => {
          if (index === todo_index) {
            this.state.completeData.push(todo);
            //debugger;
            return {
              ...todo,
              isComplete: !todo.isComplete
            };
          }
          
          
          return todo;
        });
        this.setState(prevState => ({
          todos: updatedTodos
        }));
      }
      pushNewItem(newItem) {
       debugger;
       console.log(newItem);
       var copyTodo = this.state.todos;

       copyTodo.push(newItem);
       this.setState(prevState => ({
        todos: copyTodo
      }));
      }
  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <div className= {(todo.isComplete ? 'line-tr' : '')}>
          <Todolist 
            key={index}
            index={index}
            text={todo.text} 
            checked={todo.isComplete}  
            deleteCurrentItem={this.deleteCurrentItem} 
            completeCurrentItem={this.completeCurrentItem}/>
            
            
      </div>
    )).reverse();
   
        {this.renderTodos()}
  }
  render() {
    return (
      <div>
        <TodoManageList
        pushNewItem={this.pushNewItem}
        />
        <div className={'bordr'}>
        <CompleteList
        completeData={this.state.completeData}/>
        </div>
        {this.renderTodos()}
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
