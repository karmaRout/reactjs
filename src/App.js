
import React, { Component } from 'react';
//import logo from './logo.svg';
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
          isComplete: false,
          isEdit: false
        },
        {
          text: 'Nothing to do',
          isComplete: false,
          isEdit: false
        },
        {
          text: 'Registration for new semister',
          isComplete: false,
          isEdit: false
        },
        {
          text: 'Buy daily items from new market',
          isComplete: false,
          isEdit: false
        }
      ],
      completeData:[]
    };
    this.deleteCurrentItem = this.deleteCurrentItem.bind(this);
    this.completeCurrentItem = this.completeCurrentItem.bind(this);
    this.pushNewItem = this.pushNewItem.bind(this);
    this.editCurrentItem = this.editCurrentItem.bind(this);
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
  }
  deleteCurrentItem(todo_index) {
    const updatedTodos = this.state.todos.map((todo,index) => {
            //debugger;
            if(index === todo_index) {
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
    updateCurrentItem(todo_index,obj) {
      const updatedTodos = this.state.todos.map((todo,index) => {
        if (index === todo_index) {
          return {
            ...todo,
            text: obj.text,
            isEdit: obj.isEdit
          };
        }
        
        
        return todo;
      });
      this.setState(prevState => ({
        todos: updatedTodos
      }));
      
    }
    editCurrentItem(todo_index) {
      const updatedTodos = this.state.todos.map((todo,index) => {
        if (index === todo_index) {
          return {
            ...todo,
            isEdit: !todo.isEdit
          };
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
       var copyTodo = this.state.todos;

       copyTodo.push(newItem);
       this.setState(prevState => ({
        todos: copyTodo
      }));
      }
  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <div >
          <Todolist 
            key={index}
            index={index}
            text={todo.text} 
            isComplete={todo.isComplete}
            isEdit={todo.isEdit}  
            deleteCurrentItem={this.deleteCurrentItem} 
            completeCurrentItem={this.completeCurrentItem}
            editCurrentItem={this.editCurrentItem}
            updateCurrentItem={this.updateCurrentItem}/>
            
            
      </div>
    )).reverse();
   
       // {this.renderTodos()}
  }
  render() {
    return (
      <div>
        <TodoManageList
        pushNewItem={this.pushNewItem}
        />
       
        {this.renderTodos()}
        <div className={'bordr'}>
        <CompleteList
        completeData={this.state.completeData}/>
        </div>
      </div>
    );
  }
}
export default App;
