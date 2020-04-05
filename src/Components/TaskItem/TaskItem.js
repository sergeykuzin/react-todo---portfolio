import React, { Component } from 'react';
import './TaskItem.css';
import TodoTitle from '../TodoTitle/TodoTitle';
import TodoEditingToggle from '../TodoEditingToggle/TodoEditingToggle';
import TaskControls from '../TaskControls/TaskControls';

class TaskItem extends Component {
  state = {
    newTextOfEditedTodo: '',
  };

  clearNewTextOfEditedTodo = () => this.setState({ newTextOfEditedTodo: '' });

  setNewTextOfEditedTodo = ({ target }) => {
    this.setState({ newTextOfEditedTodo: target.value });
  }

  toggleTaskTextEditingMode = (event) => {
    this.props.handleMarkAsEditable(event);

    if (this.state.newTextOfEditedTodo !== '') {
      this.props.handleEditTodo(this.state.newTextOfEditedTodo, event);
      this.clearNewTextOfEditedTodo();
    }
  }

  render() {
    const {
      id,
      title,
      isDone,
      isImportant,
      isOnTaskTextEditingMode,
      handleRemoveTodo,
      handleMarkAsDone,
      handleMarkAsImportant,
      handleMarkAsEditable,
    } = this.props;

    return (
      <li
        data-id={ id }
        className={
        "task__item hoverable z-depth-1 valign-wrapper"
            + (isDone ? " green" : "")
            + (isImportant ? " amber" : "")
        }
      >
        <TodoEditingToggle
          handleMarkAsEditable={ handleMarkAsEditable }
          handleToggleTaskTextEditingMode={ this.toggleTaskTextEditingMode }
        />
        <TodoTitle
          title={ title } 
          isOnTaskTextEditingMode={ isOnTaskTextEditingMode }
          handleSetNewTextOfEditedTodo= { this.setNewTextOfEditedTodo }
          handleToggleTaskTextEditingMode={ this.toggleTaskTextEditingMode }
        />
        <TaskControls
          handleRemoveTodo={ handleRemoveTodo } 
          handleMarkAsDone={ handleMarkAsDone }
          handleMarkAsImportant={ handleMarkAsImportant }
        />
      </li>
    );
  }
}

export default TaskItem;
