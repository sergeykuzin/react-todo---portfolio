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
        className="done-btn btn-small waves-effect waves-light"
        type="button" 
        onClick={ handleMarkAsDone }
      ><i className="material-icons">done</i></button>
      <button
        className="delete-btn btn-small waves-effect waves-light red"
        type="button" 
        onClick={ handleRemoveTodo }
      ><i className="material-icons">delete</i></button>
      <button
        className="important-btn btn-small waves-effect waves-light orange"
        type="button" 
        onClick={ handleMarkAsImportant }
      ><i className="material-icons">info_outline</i></button>
    </div>
  );
}

export default TaskControls;
