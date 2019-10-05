import React from "react";

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
        <button onClick={handleId}>{buttonText}</button>
        <button onClick={handleDelete}>削除</button>
      </li>
    );
  }
}
