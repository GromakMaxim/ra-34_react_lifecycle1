import * as React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='timer flex-row'>
                <div className='currentTime'>{this.state.date.toLocaleString()}</div>
                <div className='title'>{this.props.timezone}</div>
            </div>

        );
    }
}
