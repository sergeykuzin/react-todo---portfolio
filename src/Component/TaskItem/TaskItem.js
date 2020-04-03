import React from 'react';
import './TaskItem.css';
import TaskControls from '../TaskControls/TaskControls';

function TaskItem(props) {
  const {
    id,
    title,
    isDone,
    isImportant,
    handleRemoveTodo,
    handleMarkAsDone,
    handleMarkAsImportant,
  } = props;

  return (
    <li
      data-id={ id }
      className={
        "task__item hoverable z-depth-1 valign-wrapper"
          + (isDone ? " green" : "")
          + (isImportant ? " amber" : "")
      }
    >
      <span className="task__title">{ title }</span> 
      <TaskControls
        handleRemoveTodo={ handleRemoveTodo } 
        handleMarkAsDone={ handleMarkAsDone }
        handleMarkAsImportant={ handleMarkAsImportant }
      />
    </li>
  );
}

export default TaskItem;
