import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList(props) {
  const {
    tasks,
    handleRemoveTodo,
    handleMarkAsDone,
    handleMarkAsImportant,
  } = props;

  return (
    <ul>
      {tasks.map(({ id, title, isDone, isImportant }) => (
        <TaskItem
          key={ id }
          id={ id } 
          title={ title }
          isDone={ isDone }
          isImportant={ isImportant }
          handleRemoveTodo={ handleRemoveTodo }
          handleMarkAsDone={ handleMarkAsDone }
          handleMarkAsImportant={ handleMarkAsImportant }
        /> 
      ))}
    </ul>
  );
}

export default TaskList;
