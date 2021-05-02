import React, { Component } from 'react'

import './Item.css'

export default class Item extends Component {
    state = {showDelete: 'none'};
    showDelete = () => {
        this.setState({showDelete: 'inline-block'});
    }
    hideDelete = () => {
        this.setState({showDelete: 'none'});
    }
    updateChecked = (event) => {
        let {updateChecked, id} = this.props;
        updateChecked(id, event.target.checked);
    }
    deleteDuty = () => {
        let {deleteDuty, id} = this.props;
        deleteDuty(id);
    }
    render() {
        return (
            <section className="item" onMouseOver={this.showDelete} onMouseOut={this.hideDelete}>
                <input type="checkbox" checked={this.props.done}  onChange={this.updateChecked}/>
                <span className="duty">{this.props.duty}</span>
                <button className="delete" style={{display: this.state.showDelete}} onClick={this.deleteDuty}>删除</button>
            </section>
        )
    }
}
