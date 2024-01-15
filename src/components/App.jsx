import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
//--------------------------------------------------------------------
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectErrors, selectIsLoading } from 'rdx/selectors';
import { useEffect } from 'react';
import { getAllContacts } from 'services/operations';
//--------------------------------------------------------------------
import { Container, Title, SubTitle } from './App.styled';
// -------------------------------------------------------------------
export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrors);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && Loader}
      {/* {error && undefined} */}
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
