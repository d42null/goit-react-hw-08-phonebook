import { Button, ContactContainer, Name, Number } from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectIsLoading } from '../../redux/selectors';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <ContactContainer>
      <ContactContainer>
        <Name> {contact.name}: </Name>
        <Number> {contact.number}</Number>
      </ContactContainer>
      <Button
        type="button"
        name="Delete"
        disabled={isLoading}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </Button>
    </ContactContainer>
  );
};
