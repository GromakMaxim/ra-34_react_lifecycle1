import React, {Component} from "react";
import Form from "./Form";
import '../css/main.css';
import '../css/defaults.css';

export default class Widget extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            timers: new Map()
        }

        this.addTimer = this.addTimer.bind(this);
    }

    addTimer(timezoneName, time) {
        console.log(timezoneName + " " + time)
        let newMap = this.state.timers.set(timezoneName, time)

        this.setState({
            timers: newMap
        });
    }


    render() {
        return <Form funcAdd={this.addTimer} data={this.state.timers}/>;
    }
}
