import React from 'react';

function InputField(props) {
  const {
    inputFieldValue,
    handleSetInputFieldValue,
    handleAddTodo
  } = props;

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') handleAddTodo();
  }

  return (
    <input
      className="col s9"
      type="text" 
      placeholder="Enter your task"
      autoFocus
      value={ inputFieldValue }
      onChange={ handleSetInputFieldValue }
      onKeyPress={ handleKeyPress }
    />
  );
}

export default InputField;
