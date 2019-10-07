import React from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// const StyledBtn = styled.button(Button)`
//   background-color: green;
// `

export default class TodoItem extends React.Component {
  render() {
    const buttonText = this.props.isDone ? "戻す" : "完了";
    const id = this.props.id;
    const handleClick = this.props.handleClick;
    const handleDelet = this.props.handleDelet;

    function handleId() {
      return handleClick(id);
    }
    function handleDelete() {
      return handleDelet(id)
    }

    return (
      <li>
        <p>色：{this.props.color}</p>
        <p>タイトル: {this.props.title}</p>
        <p>詳細: {this.props.desc}</p>


        <Button variant="contained" color="primary" onClick={handleId}>
          {buttonText}
        </Button>
        <Button variant="contained" color="primary" onClick={handleDelete}>
          削除
        </Button>

      </li>
    );
  }
}
