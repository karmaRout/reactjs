import React from 'react';
import './todomanageList.css';

export default function TodoManageList(props) {
    //console.log(props);
    var currItem;
    var handleChange = function(event) {
        //debugger;
        //this.currItem = {};
        currItem = {text: event.target.value,isComplete: false};
        //console.log("currItem",currItem);
        //debugger;
    }
    return (
        <div>
            
            <input type="text" onChange={handleChange}></input>
            <button  className="button" onClick={e => props.pushNewItem(currItem)}>+</button>
        </div>
    );
}