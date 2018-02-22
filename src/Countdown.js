import React, { Component } from 'react';
import './Countdown.css';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInputEvent: '',
            errorInputDate: '',
            eventCounter: 0
        }
    }

    returnError() {
        this.setState({
            errorInputEvent: '',
            errorInputDate: ''
        })
    }



    initEvent() {
        const inputEvent = document.querySelector('.inputEvent');
        const inputDate = document.querySelector('.inputDate');

            let eventName = inputEvent.value.trim();
            let eventDate = new Date(inputDate.value);
            eventDate.setHours(0);
            eventDate.setMinutes(0);
            eventDate.setSeconds(0);

            let thisDate = new Date();

            if (eventDate > thisDate && eventName != "") {// verification of user inputs
                this.setState({
                    eventCounter: this.state.eventCounter + 1
                });

                let container = document.querySelector('.container');
                let template = `<div class="event" data-numberDiv=${this.state.eventCounter}><span class="font-effect-neon"></span><button class="button" data-click="true" onclick="this.setAttribute('data-click','false')">DELETE EVENT</button></div>`
                container.insertAdjacentHTML('beforeend', template);

                this.eventFactory(this.state.eventCounter, eventName, eventDate);

                inputEvent.value = ''; // clear input fields
                inputDate.value = '';
            } else {
                eventName == '' ? this.setState({errorInputEvent: 'please input event'}) : eventName;
                inputDate.value == '' ?  this.setState({errorInputDate: 'please input date'}) : eventDate;
                if (thisDate > eventDate) {
                    this.setState({errorInputDate: 'input correct date'}) ;
                    inputDate.value = '';
                }
            }
        }
/*---------------------------START pattern Factory-------------------------------------------------------------------*/

        eventFactory(numberEvent, eventName, eventDate) {
                class Event {
                    constructor(id, event, date) {
                        this.id = id;
                        this.event = event;
                        this.date = date;

                        this.arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                        this.year = 0;
                        this.month = 0;
                        this.day = 0;
                        this.hours = 0;
                        this.seconds = 0;

                        this.interval = setInterval(() => {
                            this.init()
                        }, 100);
                    }

                    init() {
                        let thisDate = new Date();

                        this.getYear(thisDate);
                        this.getMonts(thisDate);
                        this.getDay(thisDate);
                        this.getHours(thisDate);
                        this.getMinutes(thisDate);
                        this.getSeconds(thisDate);

                        this.show(thisDate);
                        this.deleteElem();
                    }

                    getYear(thisDate) {
                        this.year = Math.floor((((((this.date - thisDate) / 1000) / 60) / 60) / 24) / 365);
                    }

                    getMonts(thisDate) {
                        let sumDay = 0;
                        let monthCounter = 0;

                        let resDay = Math.ceil((((((this.date - thisDate) / 1000) / 60) / 60) / 24)) - 365 * Math.floor((((((this.date - thisDate) / 1000) / 60) / 60) / 24) / 365); // consider the number of days net without years

                        if (resDay < this.arrMonth[thisDate.getMonth()]) {
                            this.month = 0;
                        } else {
                            this.arrMonth.forEach((elem, index) => {
                                if (index >= thisDate.getMonth()) {
                                    monthCounter++;
                                    sumDay += elem;
                                    resDay > sumDay ? this.month = monthCounter : this.month;
                                }
                            });
                        }
                    }

                    getDay(thisDate) {
                        if (this.date.getDate() > thisDate.getDate()) {
                            this.day = this.date.getDate() - thisDate.getDate();
                        } else {
                            this.day = this.date.getDate() + this.arrMonth[thisDate.getMonth()] - thisDate.getDate();
                        }
                    }

                    getHours(thisDate) {
                        if (this.date.getHours() > thisDate.getHours()) {
                            this.hours = this.date.getHours() - thisDate.getHours();
                        } else {
                            this.hours = 24 - thisDate.getHours() + this.date.getHours();
                            this.day = this.day - 1;
                        }
                    }

                    getMinutes(thisDate) {
                        if (this.date.getMinutes() > thisDate.getMinutes()) {
                            this.minutes = this.date.getMinutes() - thisDate.getMinutes();
                        } else {
                            this.minutes = 60 - thisDate.getMinutes() + this.date.getMinutes();
                            this.hours = this.hours - 1;
                        }
                    }

                    getSeconds(thisDate) {
                        if (this.date.getSeconds() >= thisDate.getSeconds()) {
                            this.seconds = this.date.getSeconds() - thisDate.getSeconds();
                        } else {
                            this.seconds = 60 - thisDate.getSeconds() + this.date.getSeconds();
                            this.minutes = this.minutes - 1;
                        }
                    }

                    show(thisDate) {
                        let valueYear;

                        switch (this.year) {
                            case 0:
                                valueYear = 'лет';
                                break;
                            case 1:
                                valueYear = 'год';
                                break;
                            case 2:
                            case 3:
                            case 4:
                                valueYear = 'года';
                                break;
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                                valueYear = 'лет';
                                break;
                        }

                        let valueMonth;

                        switch (this.month) {
                            case 0:
                                valueMonth = 'месяцев';
                                break;
                            case 1:
                                valueMonth = 'месяц';
                                break;
                            case 2:
                            case 3:
                            case 4:
                                valueMonth = 'месяца';
                                break;
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                                valueMonth = 'месяцев';
                                break;
                        }

                        let valueDay;

                        switch (this.day) {
                            case 0:
                                valueDay = 'дней';
                                break;
                            case 1:
                                valueDay = 'день';
                                break;
                            case 2:
                            case 3:
                            case 4:
                                valueDay = 'дня';
                                break;
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                valueDay = 'дней';
                                break;
                            case 21:
                                valueDay = 'день';
                                break;
                            case 22:
                            case 23:
                            case 24:
                                valueDay = 'дня';
                                break;
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case 31:
                                valueDay = 'дней';
                                break;
                        }

                        let valueHours;

                        switch (this.hours) {
                            case 0:
                                valueHours = 'часов';
                                break;
                            case 1:
                                valueHours = 'час';
                                break;
                            case 2:
                            case 3:
                            case 4:
                                valueHours = 'часа';
                                break;
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                valueHours = 'часов';
                                break;
                            case 21:
                                valueHours = 'час';
                                break;
                            case 22:
                            case 23:
                            case 24:
                                valueHours = 'часа';
                                break;
                        }

                        let valueMinutes;

                        switch (this.minutes) {
                            case 0:
                                valueMinutes = 'минут';
                                break;
                            case 1:
                                valueMinutes = 'минута';
                                break;
                            case 2:
                            case 3:
                            case 4:
                                valueMinutes = 'минуты';
                                break;
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                valueMinutes = 'минут';
                                break;
                            case 21:
                                valueMinutes = 'минута';
                                break;
                            case 22:
                            case 23:
                            case 24:
                                valueMinutes = 'минуты';
                                break;
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                                valueMinutes = 'минут';
                                break;
                            case 31:
                                valueMinutes = 'минута';
                                break;
                            case 32:
                            case 33:
                            case 34:
                                valueMinutes = 'минуты';
                                break;
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                                valueMinutes = 'минут';
                                break;
                            case 41:
                                valueMinutes = 'минута';
                                break;
                            case 42:
                            case 43:
                            case 44:
                                valueMinutes = 'минуты';
                                break;
                            case 45:
                            case 46:
                            case 47:
                            case 48:
                            case 49:
                            case 50:
                                valueMinutes = 'минут';
                                break;
                            case 51:
                                valueMinutes = 'минута';
                                break;
                            case 52:
                            case 53:
                            case 54:
                                valueMinutes = 'минуты';
                                break;
                            case 55:
                            case 56:
                            case 57:
                            case 58:
                            case 59:
                                valueMinutes = 'минут';
                                break;
                        }

                        let valueSeconds;

                        switch (this.seconds) {
                            case 0:
                                valueSeconds = 'секунд';
                                break;
                            case 1:
                                valueSeconds = 'секунда';
                                break;
                            case 2:
                            case 3:
                            case 4:
                                valueSeconds = 'секунды';
                                break;
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                valueSeconds = 'секунд';
                                break;
                            case 21:
                                valueSeconds = 'секунда';
                                break;
                            case 22:
                            case 23:
                            case 24:
                                valueSeconds = 'секунды';
                                break;
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                                valueSeconds = 'секунд';
                                break;
                            case 31:
                                valueSeconds = 'секунда';
                                break;
                            case 32:
                            case 33:
                            case 34:
                                valueSeconds = 'секунды';
                                break;
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                                valueSeconds = 'секунд';
                                break;
                            case 41:
                                valueSeconds = 'секунда';
                                break;
                            case 42:
                            case 43:
                            case 44:
                                valueSeconds = 'секунды';
                                break;
                            case 45:
                            case 46:
                            case 47:
                            case 48:
                            case 49:
                            case 50:
                                valueSeconds = 'секунд';
                                break;
                            case 51:
                                valueSeconds = 'секунда';
                                break;
                            case 52:
                            case 53:
                            case 54:
                                valueSeconds = 'секунды';
                                break;
                            case 55:
                            case 56:
                            case 57:
                            case 58:
                            case 59:
                                valueSeconds = 'секунда';
                                break;
                        }

                        let container = document.querySelector('.container');
                        let thisDiv;
                        let thisSpan;

                        if (container != undefined) { // when we destroy component, element 'container' is undefined
                            thisDiv = container.children[this.id]; // our div in nodeList
                            thisSpan = thisDiv.children[0]; // use a 'magic number' 0 because our element span at first in our div

                            let message;

                            if (this.date > thisDate) {
                                message = `До события "${this.event}" осталось: ${this.year} ${valueYear} ${this.month} ${valueMonth} ${this.day} ${valueDay} ${this.hours} ${valueHours} ${this.minutes} ${valueMinutes} ${this.seconds} ${valueSeconds}`;
                            } else {
                                message = `Поздравляем !, событие "${this.event}" произошло :)`;
                            }
                            thisSpan.innerText = message;
                        }
                    }

                    deleteElem() {
                        let container = document.querySelector('.container');
                        let thisDiv;
                        let thisButton;

                        if (container != undefined) { // when we destroy component, element 'container' is undefined
                            thisDiv = container.children[this.id]; // our div in nodeList
                            thisButton = thisDiv.children[1]; //use a 'magic number' 1 because our element button at second in our div

                            if (thisButton.getAttribute('data-click') == 'false') { // dont use remove() because need save node list
                                clearInterval(this.interval);
                                thisDiv.innerHTML = '';
                                thisDiv.style.cssText = 'border: 0; padding: 0;';
                            }
                        } else {
                            clearInterval(this.interval);  //cleanInterval if our component destroyed
                        }
                    }
                }
            let event = new Event(numberEvent, eventName, eventDate);
            }
 /*--------------------------END pattern Factory-------------------------------------------------------------------*/

    componentWillUnmount() {  // method at work, before delete component
        let buttonDeletCollection = document.querySelectorAll('[data-click=true]');
        let buttonDeleteArr = [...buttonDeletCollection];

        buttonDeleteArr.forEach((elem)=>{   // set attr data-click = false, because we need cleanInterval
            elem.setAttribute('data-click','false');
        });
    }

    render() {
        return(
            <div>
                <header class="countdownHeader">
                    <p>Привет юзер, введи в первом поле название ивента, например "Новый год",
                        во втором поле укажи дату ивента, например 1.01.2019</p>
                    <p>ВАЖНО: Название ивента - обязательно ! При вводе даты ивента,
                        выбери будущее число, не живи вчерашним днем :)</p>
                    <p>Если же хоть одно из вышеперечисленнх условий не выполнено, отсчет не начнется !!!</p>
                </header>
                <div class="menu">
                    <TextField
                        onFocus = {this.returnError.bind(this)}
                        errorText= {this.state.errorInputEvent}
                        class="inputEvent"
                        maxlength = '20'
                        floatingLabelText = "Name of event (max 20 symbols)"
                        floatingLabelStyle = {{ color: '#9400D3' }}
                        underlineFocusStyle = {{ borderColor: '#9400D3' }}
                        inputStyle = {{
                            color:'#9400D3',
                            marginLeft: '10px'
                        }}
                    />
                    <TextField
                        onFocus = {this.returnError.bind(this)}
                        errorText= {this.state.errorInputDate}
                        floatingLabelText = "Date of event"
                        class="inputDate"
                        type = 'date'
                        floatingLabelStyle = {{ color: '#9400D3' }}
                        underlineFocusStyle = {{ borderColor: '#9400D3' }}
                        inputStyle = {{
                            color:'#9400D3',
                            marginLeft: '10px'
                        }}
                    />
                    <FlatButton
                        onClick = { this.initEvent.bind(this) }
                        label = "New counter"
                        hoverColor = '#800080'
                        rippleColor="white"
                        style = {{
                            display: 'inline-block',
                            marginLeft: '10px',
                            marginTop: '10px',
                            color: '#9400D3',
                            border: 'solid 1px',
                            borderRadius: '6px',
                            top: '10px'
                        }}
                    />
                </div>
                    <div class="container">
                    </div>
                </div>
        )
    }
}

export default Countdown;
