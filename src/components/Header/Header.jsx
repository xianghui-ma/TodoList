import React, { Component } from 'react'

import './Header.css'

export default class Header extends Component {
    getDuty = (event) => {
        let duty = event.target.value.trim();
        if(event.keyCode === 13 && duty !== ''){
            this.props.getTodo(duty);
            event.target.value = '';
        }
    }
    render() {
        return (
            <header>
                <input onKeyUp={this.getDuty} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </header>
        )
    }
}
