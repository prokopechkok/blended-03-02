import { Grid, GridItem, Todo } from 'components';
import React from 'react';
import { selectVisiblTodo } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const TodosList = () => {
  const todos = useSelector(selectVisiblTodo);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};

// rafce
