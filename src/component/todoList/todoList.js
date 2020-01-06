import React from 'react';
import './todoList.css';


export default function Todolist(props) {
    console.log("props",props);
    var currItem;
    var handleChange = function(event) {
        //debugger;
        //this.currItem = {};
        currItem = {text: event.target.value,isComplete: false,isEdit : false};
        //console.log("currItem",currItem);
        //debugger;
    }
    
    return (
        <div class="margin-top">
            <div class="row">
                <div  class="col-sm-3">
                <label className={(props.isComplete ? 'line-tr' : '')}>
                {!props.isEdit?
                    <div>
                        
                           
                            {props.text}
                        
                        
                    </div>
                    :
                    null
                }
                {props.isEdit?
                    <div>
                        
                           
                            <input type="text" placeholder={props.text} onChange={handleChange}></input>
                            <button  
                                type="button" 
                                class="btn btn-primary margin-lbl btn-sm" 
                                
                                onClick={e => props.updateCurrentItem(props.index,currItem)} index={props.index} >UPDATE</button>
                           
                        
                    </div>
                    :
                    null
                }
                   
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
                    onClick={e => props.editCurrentItem(props.index)} index={props.index} >EDIT</button>
                </div>
                
            </div>
            

            
        </div>
    );
  }