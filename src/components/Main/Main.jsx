import React, { Component } from 'react'

import Item from '../Item/Item'

import './Main.css'

export default class Main extends Component {
    render() {
        return (
            <main>
                {
                    this.props.todos.map((item) => {
                        return <Item duty={item.duty} key={item.id} id={item.id} done={item.done} updateChecked={this.props.updateChecked} deleteDuty={this.props.deleteDuty}/>
                    })
                }
            </main>
        )
    }
}
