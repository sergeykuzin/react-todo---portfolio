import React from 'react';
import './TodoEditingToggle.css';

function TodoEditingToggle(props) {
  const { handleToggleTaskTextEditingMode } = props;

  return (
    <i
      className="edit-task material-icons"
      onClick={ handleToggleTaskTextEditingMode } 
    >edit</i>
  );
}

export default TodoEditingToggle;
