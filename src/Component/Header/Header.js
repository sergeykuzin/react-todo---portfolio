import React from 'react';
import InputField from '../InputField/InputField';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

function Header(props) {
  const {
    inputFieldValue,
    handleAddTodo,
    handleSetInputFieldValue } = props;

  return (
    <div className="row">
      <InputField
        inputFieldValue={ inputFieldValue } 
        handleSetInputFieldValue={ handleSetInputFieldValue }
        handleAddTodo={ handleAddTodo }
      />
      <AddTaskButton
        inputFieldValue={ inputFieldValue } 
        handleAddTodo={ handleAddTodo }
      />
    </div>
  );
}

export default Header;
