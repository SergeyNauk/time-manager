import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Time from './Time';
import Alarm_clock from './Alarm_clock';
import Countdown from './Countdown';
import Stopwatch from './Stopwatch';
import Home from './Home';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <header class="mainHeader">
                <h1>Time-manager application</h1>
            </header>
            <BrowserRouter history = {history}>
                <div>
                    <FlatButton
                        containerElement = { <Link to="/Time"/> }
                        label = "Time"
                        hoverColor = '#800080'
                        rippleColor="white"
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: '#9400D3',
                            border: 'solid 1px',
                            borderRadius: '6px'
                        }}
                    />
                    <FlatButton
                        containerElement = { <Link to="/Countdown"/> }
                        label = "Countdown"
                        hoverColor = '#800080'
                        rippleColor="white"
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: '#9400D3',
                            border: 'solid 1px',
                            borderRadius: '6px'
                        }}
                    />
                    <FlatButton
                        containerElement = { <Link to="/Alarm_clock"/> }
                        label = "Alarm clock"
                        hoverColor = '#800080'
                        rippleColor="white"
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: '#9400D3',
                            border: 'solid 1px',
                            borderRadius: '6px'
                        }}
                    />
                    <FlatButton
                        containerElement = { <Link to="/Stopwatch"/> }
                        label = "Stopwatch"
                        hoverColor = '#800080'
                        rippleColor="white"
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: '#9400D3',
                            border: 'solid 1px',
                            borderRadius: '6px'
                        }}
                    />
                    <Route path = "/" component = { Home } />
                    <Route path = "/Time" component = { Time } />
                    <Route path = "/Alarm_clock" component ={ Alarm_clock } />
                    <Route path = "/Countdown" component = { Countdown } />
                    <Route path = "/Stopwatch" component = { Stopwatch } />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
