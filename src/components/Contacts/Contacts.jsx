import { ContactForm } from 'components/ContactForm/ContacForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { Alert, Typography } from '@mui/material';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      {contacts.length > 0 && (
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Contacts
        </Typography>
      )}
      {contacts.length > 0 && <Filter />}
      {error && (
        <Alert severity="error">{error}</Alert>
      )}
      {contacts.length > 0 && <ContactList />}
      {isLoading && <Loader />}
    </>
  );
};
