import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodosList } from 'components/TodosList/TodosList';
import { useSelector } from 'react-redux';
import { selectTodoos } from '../../redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodoos)


  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <TodosList />
        </Container>
      </Section>
    </>
  );
};
