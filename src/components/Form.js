import React from "react";
import Timer from "./Timer";

export default function Form(props) {
    function submitHandler(e) {
        e.preventDefault();
        props.funcAdd(e.target.name.value, e.target.timezone.value);
    }

    function renderTimers() {
        if (props.data.length === 0) return null;
        let result = [];
        props.data.forEach(elem => {
            result.push(<Timer key={elem.id} id={elem.id} title={elem.title} time={elem.time}
                               funcDel={props.funcDel}/>);
        })
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
                        <input type='text' name='timezone' placeholder='type +1 / +2 / +3.. or -1 / -2 / -3'/>
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
