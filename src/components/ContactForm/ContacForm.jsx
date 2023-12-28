import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { Box, Fab, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Stack spacing={1} direction="row">
        <TextField
          type="text"
          name="name"
          autoFocus
          required
          id="outlined-name"
          label="Name"
        />
        <TextField
          type="tel"
          name="number"
          required
          id="outlined-number"
          label="Number"
        />
        <Box
          sx={{
            pt: 2,
          }}
        >
          <Fab
            size="small"
            color="primary"
            aria-label="add contact"
            type="submit"
            disabled={isLoading}
          >
            <AddIcon />
          </Fab>
        </Box>
      </Stack>
    </Box>
  );
};
