import React, { Component } from 'react'

import './Footer.css'

export default class Footer extends Component {
    getDoneSum = () => {
        let doneSum = this.props.todos.reduce((prev, item) => {
            return prev + (item.done === true ? 1 : 0);
        }, 0);
        return doneSum;
    }
    selectAll = (event) => {
        this.props.selectAll(event.target.checked);
    }
    clearDutyDone = () => {
        this.props.clearDutyDone();
    }
    render() {
        return (
            <footer>
                <input type="checkbox" onChange={this.selectAll} />
                <span>已完成</span>
                <span className="doneSum">{this.getDoneSum()}</span>
                <span> / 全部</span>
                <span className="dutySum">{this.props.todos.length}</span>
                <button onClick={this.clearDutyDone}>清除已完成任务</button>
            </footer>
        )
    }
}