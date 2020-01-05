import React from 'react';

export default function Completelist(props) {
    
    var completeList = props.completeData;
    if(completeList.length == 0){
        completeList = [{'text':'','isComplete':''}];
    }
    return (props.completeData.map((todo, index) => (
        <label>
            {completeList[index].text}
        </label>
        ))
    );
}