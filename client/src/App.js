import React from "react";
import Form from "./Form.jsx";
import "./App.css";
import TodoList from "./TodoList.jsx";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightgreen;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.fetchResponse()
  }

  handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const desc = e.target.desc.value;
    // const color = e.target.color.value;
    // const newTodos = this.state.todos.slice();

    fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        isDone: false
      })
    }).then(() => {
      this.fetchResponse()
    })

  }

  handleClick(key) {
    const newTodos = this.state.todos.slice();
    newTodos[key].isDone = !newTodos[key].isDone;
    this.setState({
      todos: newTodos
    });
  }

  handleDelete(key) {
    console.log(key);
    const deleteOption = {
      method: 'DELETE'
    }
  }

  fetchResponse() {
    fetch('http://localhost:3001/api/todos')
      .then(res => res.json())
      .then(res => {
        this.setState({
          todos: res
        })
      })
  }

  render() {
    // const status = this.state.isDone ? "戻す" : "完了";
    return (
      // <Container>
      //   <div>{status}</div>
      //   <Form handleSubmit={this.handleSubmit.bind(this)}></Form>
      //   <TodoList
      //     todos={this.state.todos}
      //     handleClick={this.handleClick.bind(this)}
      //   ></TodoList>
      // </Container>
      <Container>
        <Form handleSubmit={this.handleSubmit.bind(this)}></Form>
        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
        ></TodoList>
      </Container>
    );
  }
}

export default App;
