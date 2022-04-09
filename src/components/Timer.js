import React, {Component} from "react";

export default class Timer extends Component{

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        clearInterval(this.timerID);
    }

    componentWillUnmount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='timer flex-row'>
                <div className='currentTime'>{this.props.time.toLocaleString()}</div>
                <div className='title'>{this.props.timezone}</div>
            </div>
        )
    }


}
