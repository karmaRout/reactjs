import React from 'react';

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
            <button onClick={e => props.pushNewItem(currItem)}>Add</button>
            <input type="text" onChange={handleChange}></input>
        </div>
    );
}