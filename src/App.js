import React from "react";
import Form from "./Form.jsx";
import "./App.css";
import TodoList from "./TodoList.jsx";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightgreen;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const desc = e.target.title.value;
    const newTodos = this.state.todos.slice();
    newTodos.push({
      title: title,
      desc: desc,
      isDone: false
    });

    this.setState({
      todos: newTodos
    });
  }

  handleClick(key) {
    const newClicks = this.state.todos.slice();
    newClicks[key].isDone = ！this.state.isDone;

    this.setState({
      todos: newClicks
    });
  }
  render() {
    const status = this.state.isDone ? "戻す" : "完了";
    return (
      <Container>
        <div>{status}</div>
        <Form handleSubmit={this.handleSubmit.bind(this)}></Form>
        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick.bind(this)}
        ></TodoList>
      </Container>
    );
  }
}

export default App;
