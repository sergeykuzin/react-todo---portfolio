import React, { Component } from 'react';
import './App.css';
import findFirstTagParentWithCssClass from '../../Utils/findFirstTagParentWithCssClass';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import M from 'materialize-css';

class App extends Component {
  state = {
    tasks: [],
    inputFieldValue: '',
  };

  addTodo = () => {
    const newTaskTitle = this.state.inputFieldValue;

    if (this.hasTaskInTaskList(newTaskTitle)) {
      this.showMessage('This task is already on the list');
      return;
    } 

    if (newTaskTitle === '') {
      this.showMessage('Enter text your task');
      return;
    } 

    const newTodo = {
      id: Date.now(),
      title: newTaskTitle,
      isDone: false,
      isImportant: false,
      isOnTaskTextEditingMode: false,
    };

    this.setState(({ tasks }) => ({ tasks: [...tasks, newTodo] }));

    this.clearInputField();
  }

  editTodo = (newTextTodo, event) => {
    if (this.hasTaskInTaskList(newTextTodo)) {
      this.showMessage('This task is already on the list');
      return;
    } 

    const IDOfEditableTask = Number.parseInt(this.findTodoWrapper(event.target).dataset.id, 10);

    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) => {
        if (task.id === IDOfEditableTask) task.title = newTextTodo;
        return task;
      }),
    }));
  }

  removeTodo = ({ target }) => {
    const IDTaskToBeDeleted = Number.parseInt(this.findTodoWrapper(target).dataset.id, 10);

    this.setState(({ tasks }) => ({
      tasks: tasks.filter(task => task.id !== IDTaskToBeDeleted),
    })); 
  }

  markAsDone = ({ target }) => {
    const IDTaskToBeMarkAsDone = Number.parseInt(this.findTodoWrapper(target).dataset.id, 10);

    const newTasks = this.state.tasks.map(task => {
      if (task.id === IDTaskToBeMarkAsDone) {
        if (task.isImportant) task.isImportant = !task.isImportant;
        task.isDone = !task.isDone;
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  }

  markAsImportant = ({ target }) => {
    const IDTaskToBeMarkAsImportant = Number.parseInt(this.findTodoWrapper(target).dataset.id, 10);
     
    const newTasks = this.state.tasks.map(task => {
      if (task.id === IDTaskToBeMarkAsImportant) {
        if (task.isDone) task.isDone = !task.isDone;
        task.isImportant = !task.isImportant;
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  }

  markAsEditable = ({ target }) => {
    const IDTaskToBeMarkAsEditable = Number.parseInt(this.findTodoWrapper(target).dataset.id, 10);

    const newTasks = this.state.tasks.map(task => {
      if (task.id === IDTaskToBeMarkAsEditable) {
        task.isOnTaskTextEditingMode = !task.isOnTaskTextEditingMode;
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  }

  setInputFieldValue = ({ target }) => {
    this.setState({ inputFieldValue: target.value });
  }

  clearInputField = () => {
    this.setState({ inputFieldValue: '' });
  }

  hasTaskInTaskList = (todoTitle) => {
    return !!this.state.tasks.find((todo) => todo.title === todoTitle);
  }

  findTodoWrapper = (children) => findFirstTagParentWithCssClass(children, 'LI', 'task__item');

  showMessage = (message) => {
    M.toast({
      html: message,
      displayLength: 2000,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Create your task list</h2>
        <Header 
          handleAddTodo={ this.addTodo } 
          handleSetInputFieldValue={ this.setInputFieldValue }
          inputFieldValue={ this.state.inputFieldValue }
        />
        <TaskList 
          tasks={ this.state.tasks } 
          handleRemoveTodo={ this.removeTodo }
          handleMarkAsDone={ this.markAsDone }
          handleMarkAsImportant={ this.markAsImportant }
          handleMarkAsEditable= { this.markAsEditable }
          handleEditTodo= { this.editTodo }
        />
      </div>
    );
  }
}

export default App;
