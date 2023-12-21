import { ContactsTitle, Container, Error, Title } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContacForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length > 0 && <ContactsTitle>Contacts</ContactsTitle>}
      {contacts.length > 0 && <Filter />}
      {error && <Error>{error}</Error>}
      {contacts.length > 0 && <ContactList />}
      {isLoading && <Loader />}
    </Container>
  );
};
