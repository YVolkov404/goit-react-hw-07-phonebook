import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
//--------------------------------------------------------------------
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'rdx/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'services/operations';
//--------------------------------------------------------------------
import { Container, Title, SubTitle } from './App.styled';
// -------------------------------------------------------------------
export const App = () => {
  const dispatch = useDispatch();

  const { contacts, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && Loader}
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      {/* {contacts.length > 0 && <ContactList />} */}
      {error && null}
    </Container>
  );
};
