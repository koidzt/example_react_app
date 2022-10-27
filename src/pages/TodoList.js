import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';

class TodoList extends Component {
  state = {
    inputValue: '',
    todoList: [
      {
        id: 1,
        task: 'Do Homework',
      },
      {
        id: 2,
        task: 'Swimming',
      },
      {
        id: 3,
        task: 'Shopping',
      },
    ],
    todoListCanEdit: [
      {
        id: 1,
        task: 'Do Homework',
      },
      {
        id: 2,
        task: 'Swimming',
      },
      {
        id: 3,
        task: 'Shopping',
      },
    ],
  };

  createNewTask = (event) => {
    event.preventDefault();
    const newTask = this.state.inputValue;
    const newTodoList = [...this.state.todoList];
    const newTodoListCanEdit = [...this.state.todoListCanEdit];
    const newList = { task: newTask, id: Math.round(Math.random() * 1000) };
    newTodoList.push(newList);
    newTodoListCanEdit.push(newList);
    this.setState({ todoList: newTodoList, todoListCanEdit: newTodoListCanEdit });
    this.setState({ inputValue: '' });
  };

  // deleteTask = (id) => {
  //   const newTodoList = [...this.state.todoList];
  //   const targetTodoIdx = newTodoList.findIndex(e => e.id === id);
  //   newTodoList.splice(targetTodoIdx, 1);
  //   this.setState({todoList: newTodoList});
  // }

  deleteTask = (id) => {
    const newTodoList = this.state.todoList.filter((e) => e.id !== id);
    this.setState({ todoList: newTodoList });
  };

  editTask = (id, temp) => {
    const newTodoListCanEdit = this.state.todoListCanEdit.map((item) =>
      item.id === id ? { id: item.id, task: temp } : { ...item }
    );
    this.setState({ todoListCanEdit: newTodoListCanEdit });
  };
  deleteTaskCanEdit = (id) => {
    const newTodoList = this.state.todoListCanEdit.filter((e) => e.id !== id);
    this.setState({ todoListCanEdit: newTodoList });
  };

  render() {
    const { todoList, todoListCanEdit, inputValue } = this.state;

    return (
      <div>
        {/* แบบไม่สร้าง component แยก */}
        <form onSubmit={this.createNewTask}>
          <input value={inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
          <button onClick={this.createNewTask}>Add todo</button>
        </form>
        <div style={{ textAlign: 'start' }}>
          <ul style={{ width: '400px', margin: '0 auto' }}>
            {todoList.map(({ id, task }) => (
              <li key={id}>
                {task}
                <button onClick={() => this.deleteTask(id)} style={{ margin: 'auto auto auto 1em' }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* แบบสร้าง component แยกแล้วค่อยเรียกมาแสดง */}
        <div>
          <h5>Can Edit Task</h5>
          <div style={{ textAlign: 'start' }}>
            <ul style={{ width: '400px', margin: '0 auto' }}>
              {todoListCanEdit.map((item) => (
                <TodoItem key={item.id} todo={item} deleteTask={this.deleteTaskCanEdit} editFn={this.editTask} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoList;
