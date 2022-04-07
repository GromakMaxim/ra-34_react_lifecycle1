import React from "react";

export default function Form(props) {
    return (
        <div className='main b1'>
            <form className='flex-row'>
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

                <div className='timer flex-row'>
                    <div className='currentTime'>11:58:26</div>
                    <div className='title'>Moscow</div>
                </div>

                <div className='timer flex-row'>
                    <div className='currentTime'>11:58:26</div>
                    <div className='title'>Moscow</div>
                </div>

                <div className='timer flex-row'>
                    <div className='currentTime'>11:58:26</div>
                    <div className='title'>Moscow</div>
                </div>

            </div>
        </div>
    );
}
