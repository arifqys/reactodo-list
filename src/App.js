import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }
  onInputChange = e => {
    this.setState({currentTodo: e.target.value});
  }
  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({todos: todosCopy, currentTodo:""});
  }
  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({todos: todosCopy})
  }
  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return (
        <Todo todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });
    return (
      <div>
        <input placeholder="Next todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
        <button onClick={this.onClick}>Add</button>
        <br/>
        { this.state.todos.length === 0 ? "There is no todo" : <ul>{bulletedTodos}</ul> }
      </div>
    );
  }
}

export default App;
