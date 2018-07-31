import React, {} from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <tr><td><button className="delete"onClick={props.delete}>X</button></td><td>{props.todo}</td></tr>
  );
}

export default Todo;