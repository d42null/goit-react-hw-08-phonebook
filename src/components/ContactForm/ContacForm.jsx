import { Button, FormContainer, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (contacts.find(c => c.name === e.target.name.value)) {
      alert(`${e.target.name.value} is already in contacts`);
      return;
    }
    dispatch(
      addContact({ name: e.target.name.value, number: e.target.number.value })
    );
    e.target.reset();
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>
        Name
        <Input type="text" name="name" required />
      </Label>
      <Label>
        Number
        <Input type="tel" name="number" required />
      </Label>
      <Button type="submit" disabled={isLoading}>
        Add contact
      </Button>
    </FormContainer>
  );
};
