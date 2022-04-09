import React from "react";

export default function Timer(props){
    return (
        <div className='timer flex-row'>
            <div className='currentTime'>{props.time}</div>
            <div className='title'>{props.timezone}</div>
        </div>
    )
}
