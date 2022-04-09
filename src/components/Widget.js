import React, {Component} from "react";
import Form from "./Form";
import '../css/main.css';
import '../css/defaults.css';

export default class Widget extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            timers: []
        }

        this.addTimer = this.addTimer.bind(this);
        this.deleteTimer = this.deleteTimer.bind(this);
    }

    deleteTimer(e) {
        let arr = this.state.timers.filter(elem => elem.id !== parseInt(e.target.id));
        this.setState({
            timers: arr
        })
    }

    addTimer(timezoneName, time) {
        let maxIndex;
        if (this.state.timers.length === 0) {
            maxIndex = 0;
        } else {
            maxIndex = this.state.timers.reduce((prev, current, index) => prev.id > current.id ? prev : index, {}) + 1;
        }
        let obj = {
            title: timezoneName,
            time: parseInt(time),
            id: maxIndex
        }

        let arr = this.state.timers;
        arr.push(obj);

        this.setState({
            timers: arr
        });
    }


    render() {
        return <Form funcDel={this.deleteTimer} funcAdd={this.addTimer} data={this.state.timers}/>;
    }
}
