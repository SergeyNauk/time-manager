import React, { Component } from 'react';
import moment from 'moment';
import './Time.css';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeNow: ''
        }
    }

    componentDidMount() {  // method after render component
        setInterval(()=>{
            this.setState({timeNow: moment().format('MMMM Do YYYY, h:mm:ss a')
            });
        }, 1000);
    }

    render() {
        return (
        <div class="timeNow">{this.state.timeNow}</div>
        )
    }
}

export default Time;
