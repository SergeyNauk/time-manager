import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
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
            this.setState({timeNow: moment().locale("ru").format("MMMM Do, dddd, YYYY, h:mm:ss a")
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
