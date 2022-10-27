import React, { Component } from 'react';

export default class TodoItem extends Component {
  //เหลือปุ่ม Edit
  state = {
    temp: '',
    isEdit: false,
  };

  editTodoItem = () => {
    const { todo, editFn } = this.props;
    const { temp } = this.state;

    editFn(todo.id, temp);
    this.setState({ isEdit: false });
  };

  clickEdit = () => {
    this.setState({ isEdit: true, temp: this.props.todo.task });
  };

  render() {
    const { todo, editFn, deleteTask } = this.props;
    const { temp, isEdit } = this.state;

    return (
      <li key={todo.id}>
        {isEdit ? <input value={temp} onChange={(e) => this.setState({ temp: e.target.value })} /> : null}
        {isEdit ? (
          <button onClick={this.editTodoItem} style={{ margin: 'auto auto auto 1em' }}>
            Done
          </button>
        ) : null}
        {!isEdit ? todo.task : null}
        {!isEdit ? (
          <button onClick={this.clickEdit} style={{ margin: 'auto auto auto 1em' }}>
            Edit
          </button>
        ) : null}
        <button onClick={() => deleteTask(todo.id)} style={{ margin: 'auto auto auto 1em' }}>
          Delete
        </button>
      </li>
    );
  }
}
