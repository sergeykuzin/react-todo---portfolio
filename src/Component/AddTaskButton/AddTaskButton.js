import React from 'react';

function AddTaskButton(props) {
  const { inputFieldValue, handleAddTodo } = props;

  return (
    <button
      className={
        "col s2 offset-s1 btn-large waves-effect waves-light"
        + (inputFieldValue ? "" : " disabled")
      }
      type="button" 
      onClick={ handleAddTodo }
    >Add</button>
  );
}

export default AddTaskButton;
