import * as React from "react";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        let d = new Date();
        d.setHours(d.getHours() + props.time)
        this.state = {date: d};
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
        let d = new Date();
        d.setHours(d.getHours() + this.props.time)
        this.setState({
            date: d
        });
    }

    render() {
        return (
            <div className='timer flex-row'>
                <div className='currentTime'>{this.state.date.toLocaleString()}</div>
                <div className='title'>{this.props.title}</div>
            </div>

        );
    }
}
