import React from 'react';



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
    
    return (
        <div>
            <label>
                {props.text}
            </label>
            <button  
            type="button" 
           >DELETE</button>
        </div>
    );
  }