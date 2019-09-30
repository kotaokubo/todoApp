import React from "react";

import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  render(props) {
    // constructor(props) {
    //   this.state = {
    //     colors: [
    //       red:
    //     ]
    //   }
    const todos = this.props.todos.map((todo, i) => {
      return (
        <TodoItem
          key={i}
          id={i}
          title={todo.title}
          desc={todo.desc}
          color={todo.color}
          isDone={todo.isDone}
          handleClick={this.props.handleClick}
        ></TodoItem>
      );
    });
    return <ul>{todos}</ul>;
  }
}
