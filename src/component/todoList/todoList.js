import React from 'react';
import './todoList.css';


export default function Todolist(props) {
    // const {index, text, checked, handleTodoCheckboxToggle,handleDeleteItems} = props;
   //const {index, text, checked, handleTodoCheckboxToggle,handleDeleteItems} = props;
   //const todoClassName = checked ? ' checked' : '';
    // const todoClassName = checked ? ' checked' : '';
    // return (
    //   <div>
    //   <label className={'todo' + todoClassName}>
        
  
         
    //     {text}
         
    //   </label>
    //   <button  
    //           type="button" 
    //           onClick={e => handleTodoCheckboxToggle(index)}>COMPLETE</button>
    //           <button  
    //           type="button" 
    //           onClick={e => handleDeleteItems(index)}>DELETE</button>
    //   </div>
    // );
    console.log("props",props);
    
    return (
        <div class="margin-top">
            <div class="row">
                <div  class="col-sm-4">
                <label className={(props.isComplete ? 'line-tr' : '')}>
                    {props.text}
                </label>
                </div>
                <div class="col-sm-1">
                <button  
                    type="button" 
                    class="btn btn-primary margin-lbl " 
                    
                    onClick={e => props.completeCurrentItem(props.index)} index={props.index} >Complete</button>
                </div>
                
                <div class="col-sm-1">
                <button  
                type="button" 
                class="btn btn-danger margin-lbl"
                
                onClick={e => props.deleteCurrentItem(props.index)} index={props.index}>DELETE</button>
                </div>
            </div>
            

            
        </div>
    );
  }