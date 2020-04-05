import React from 'react';
import './TodoTitle.css';
import EditInputField from '../EditInputField/EditInputField';

function TodoTitle(props) {
  const {
    title,
    isOnTaskTextEditingMode,
    handleSetNewTextOfEditedTodo,
    handleToggleTaskTextEditingMode,
  } = props;

  const todoTitle = (
    <span className="task__title">{ title }</span> 
  );

  return (
    (isOnTaskTextEditingMode)
      ? <EditInputField
          title={ title }
          handleSetNewTextOfEditedTodo={ handleSetNewTextOfEditedTodo }
          handleToggleTaskTextEditingMode={ handleToggleTaskTextEditingMode }
        /> 
      : todoTitle 
  );
}

export default TodoTitle;
