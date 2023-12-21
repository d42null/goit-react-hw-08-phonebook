import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Contact key={contact.id} contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
