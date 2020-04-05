import React from 'react';

function EditInputField(props) {
  const {
    title,
    handleSetNewTextOfEditedTodo,
    handleToggleTaskTextEditingMode,
  } = props;

  const handleKeyPress = (event) => {
    const pressedKey = event.key;
    if (pressedKey === 'Enter') handleToggleTaskTextEditingMode(event); 
  }

  return (
    <input
      type="text"
      defaultValue={ title }
      autoFocus
      onChange={ handleSetNewTextOfEditedTodo }
      onKeyPress={ handleKeyPress }
    />
  );
}

export default EditInputField;
