import React from 'react';
import './TaskControls.css';

function TaskControls(props) {
  const {
    handleRemoveTodo,
    handleMarkAsDone,
    handleMarkAsImportant, 
  } = props;

  return (
    <div className="task__controls-wrapper">
      <button
        className="btn-small waves-effect waves-light"
        type="button" 
        onClick={ handleMarkAsDone }
      >done</button>
      <button
        className="btn-small waves-effect waves-light red"
        type="button" 
        onClick={ handleRemoveTodo }
      >delete</button>
      <button
        className="btn-small waves-effect waves-light orange"
        type="button" 
        onClick={ handleMarkAsImportant }
      >important</button>
    </div>
  );
}

export default TaskControls;
