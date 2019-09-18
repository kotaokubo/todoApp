import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const buttonText = this.props.isDone ? "戻す" : "完了";
    const id = this.props.id;
    const handleClick = this.props.handleClick;

    function handleId() {
      return handleClick(id);
    }

    return (
      <li>
        <p>タイトル: {this.props.title}</p>
        <p>詳細: {this.props.desc}</p>
        <button onClick={handleId}>{buttonText}</button>
      </li>
    );
  }
}
