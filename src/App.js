import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import './App.css';

export default class App extends Component {
  state = {todos: []};
  getTodo = (duty) => {
    let id = nanoid(),
        newTodos = [...this.state.todos, {id: id, duty: duty, done: false}];
    this.setState({todos: newTodos});
  }
  updateChecked = (id, done) => {
    let newTodos = this.state.todos.map((item) => {
      if(item.id === id){
        return {...item, done: done};
      }else{
        return item;
      }
    });
    this.setState({todos: newTodos});
  }
  deleteDuty = (id) => {
    let newTodos = this.state.todos.filter((item) => {
      return !(item.id === id);
    });
    this.setState({todos: newTodos});
  }
  selectAll = (done) => {
    let newTodos = this.state.todos.map((item) => {
      return {...item, done: done};
    });
    this.setState({todos: newTodos});
  }
  clearDutyDone = () => {
    let newTodos = this.state.todos.filter((item) => {
      return item.done !== true;
    });
    this.setState({todos: newTodos});
  }
  render() {
    return (
      <section className="wrapper">
        <Header getTodo = {this.getTodo} />
        <Main todos={this.state.todos} updateChecked={this.updateChecked} deleteDuty={this.deleteDuty}/>
        <Footer todos={this.state.todos} selectAll={this.selectAll} clearDutyDone={this.clearDutyDone}/>
      </section>
    );
  }
}