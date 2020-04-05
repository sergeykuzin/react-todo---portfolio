import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList(props) {
  const {
    tasks,
    handleEditTodo,
    handleRemoveTodo,
    handleMarkAsDone,
    handleMarkAsImportant,
    handleMarkAsEditable,
  } = props;

  return (
    <ul>
      {tasks.map(({ id, title, isDone, isImportant, isOnTaskTextEditingMode }) => (
        <TaskItem
          key={ id }
          id={ id } 
          title={ title }
          isDone={ isDone }
          isImportant={ isImportant }
          isOnTaskTextEditingMode={ isOnTaskTextEditingMode }
          handleEditTodo={ handleEditTodo }
          handleRemoveTodo={ handleRemoveTodo }
          handleMarkAsDone={ handleMarkAsDone }
          handleMarkAsImportant={ handleMarkAsImportant }
          handleMarkAsEditable={ handleMarkAsEditable }
        /> 
      ))}
    </ul>
  );
}

export default TaskList;
