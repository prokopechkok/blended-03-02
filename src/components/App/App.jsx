import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodosList } from 'components/TodosList/TodosList';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoos } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchTodos } from '../../redux/operation';
import { setFilter } from '../../redux/filterSlice';

export const App = () => {
  const todos = useSelector(selectTodoos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <input
            type="text"
            name="filter"
            onChange={e => dispatch(setFilter(e.target.value.trim()))}
          />

          <TodosList />
        </Container>
      </Section>
    </>
  );
};
