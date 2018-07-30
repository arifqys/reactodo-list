import React, { Component } from 'react';

const Todo = props => {
  return (
    <li>{props.todo}<button onClick={props.delete}>X</button></li>
  );
}

export default Todo;