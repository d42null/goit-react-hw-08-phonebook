import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleContacts } from '../../redux/selectors';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {contacts.length > 0 && (
        <List dense>
          {contacts.map(contact => (
            <ListItem
              key={contact.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  name="Delete"
                  disabled={isLoading}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ContactPhoneTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={contact.name} secondary={contact.number} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
