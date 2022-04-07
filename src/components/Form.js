import React from "react";
import Timer from "./Timer";

export default function Form(props) {
    function submitHandler(e) {
        e.preventDefault();
        props.funcAdd(e.target.name.value, e.target.timezone.value);
    }

    function renderTimers() {
        let result = [];
        console.log(props.data)
        for (let entry of props.data) {
            result.push(<Timer key={entry.key} title={entry.key} time={entry.value}/>);
        }
        console.log(result)
        return result;
    }


    return (
        <div className='main b1'>
            <form className='flex-row' onSubmit={submitHandler}>
                <div className='flex-col'>
                    <span>Название:</span>
                    <label>
                        <input type='text' name='name'/>
                    </label>
                </div>

                <div className='flex-col'>
                    <span>Временная зона:</span>
                    <label>
                        <input type='text' name='timezone'/>
                    </label>
                </div>

                <div className='flex-col'>
                    <input type='submit' value='Добавить'/>
                </div>
            </form>

            <div className='timers flex-col'>
                {renderTimers()}
            </div>
        </div>
    );
}
