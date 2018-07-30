import React, { Component } from 'react';
import './App.css';

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
  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return (
        <li key={i}>{e}</li>
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
