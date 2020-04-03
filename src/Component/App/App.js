import React, { Component } from 'react';
import './App.css';
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
    };

    this.setState(({ tasks }) => ({ tasks: [...tasks, newTodo] }));

    this.clearInputField();
  }

  removeTodo = ({ target }) => {
    const IDTaskToBeDeleted = Number.parseInt(target.parentNode.parentNode.dataset.id, 10);

    this.setState(({ tasks }) => ({
      tasks: tasks.filter(task => task.id !== IDTaskToBeDeleted),
    })); 
  }

  markAsDone = ({ target }) => {
    const IDTaskToBeMarkAsDone = Number.parseInt(target.parentNode.parentNode.dataset.id, 10);

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
    const IDTaskToBeMarkAsImportant = Number.parseInt(target.parentNode.parentNode.dataset.id, 10);
     
    const newTasks = this.state.tasks.map(task => {
      if (task.id === IDTaskToBeMarkAsImportant) {
        if (task.isDone) task.isDone = !task.isDone;
        task.isImportant = !task.isImportant;
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
        />
      </div>
    );
  }
}

export default App;
