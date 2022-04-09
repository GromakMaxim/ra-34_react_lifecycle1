import * as React from "react";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        let d = new Date();
        let currentTimeZoneOffsetInHours = d.getTimezoneOffset() / 60;
        d.setHours(d.getHours() + currentTimeZoneOffsetInHours + props.time + 1)
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
        let currentTimeZoneOffsetInHours = d.getTimezoneOffset() / 60;
        console.log(currentTimeZoneOffsetInHours)
        d.setHours(d.getHours() + currentTimeZoneOffsetInHours + this.props.time + 1)
        this.setState({
            date: d
        });
    }

    render() {
        return (
            <div className='timer flex-row'>
                <div className='currentTime'>{this.state.date.toLocaleString()}</div>
                <div className='title'>{this.props.title}</div>
                <div id={this.props.id} className='delete' onClick={this.props.funcDel}>X</div>
            </div>

        );
    }
}
