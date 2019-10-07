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
    e.persist()

    // 同期処理がhandleSubmitだけど、fetchが非同期だから、fetchはいつ終わるかわからないし、fetchが終わる前にevent(e)がなくなる
    fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      // fetch使う時はheaderを使わなくてはならぬ
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        isDone: false
      })
    }).then(() => {
      e.target.title.value = ""
      e.target.desc.value = ""
      this.fetchResponse()
    })

  }

  handleClick(id, key) {
    const newTodos = this.state.todos.slice();
    // newTodos[key].title = !newTodos[key].title;
    // newTodos[key].desc = !newTodos[key].desc;
    // newTodos[key].isDone = !newTodos[key].isDone;
    // this.setState({
    //   todos: newTodos
    // });
    console.warn(newTodos)
    fetch(`http://localhost:3001/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newTodos[id].title,
        desc: newTodos[id].desc,
        isDone: !newTodos[id].isDone
      })
    }).then(() => {
      this.fetchResponse()
    })
  }

  handleDelete(key) {
    console.log(key)
    // fetch('http://localhost:3001/api/todos/:id'), {
    //   method: 'DELETE'
    // }

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
