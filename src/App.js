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
        <Todo key={i} todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });
    return (
      <div className="container">
      <h1>Reactodo List</h1>
        <div className="container-input">
          <input placeholder="Next todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
          <button className="add" onClick={this.state.currentTodo !== "" ? this.onClick : null}>Add</button>
        </div>
        <br/>
        { this.state.todos.length === 0 ? <p>There is no todo</p> : <table><tbody>{bulletedTodos}</tbody></table> }
      </div>
    );
  }
}

export default App;
