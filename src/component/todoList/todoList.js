import React from 'react';
import './todoList.css';


export default function Todolist(props) {
    console.log("props",props);
    
    return (
        <div class="margin-top">
            <div class="row">
                <div  class="col-sm-3">
                <label className={(props.isComplete ? 'line-tr' : '')}>
                    {props.text}
                </label>
                </div>
                <div class="col-sm-1">
                <button  
                    type="button" 
                    class="btn btn-primary margin-lbl btn-sm" 
                    
                    onClick={e => props.completeCurrentItem(props.index)} index={props.index} >COMPLETE</button>
                </div>
                
                <div class="col-sm-1">
                <button  
                type="button" 
                class="btn btn-danger margin-lbl btn-sm"
                
                onClick={e => props.deleteCurrentItem(props.index)} index={props.index}>DELETE</button>

                


                </div>
                <div  class="col-sm-1">
                <button  
                    type="button" 
                    class="btn btn-primary margin-lbl btn-sm " 
                    index={props.index} >EDIT</button>
                </div>
                
            </div>
            

            
        </div>
    );
  }