import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="desc" />
        <select name="color">
          <option value="orange">orange</option>
          <option value="skyblue">skyblue</option>
          <option value="green">green</option>
        </select>
        <button type="submit">追加</button>
      </form>
    );
  }
}

export default Form;
