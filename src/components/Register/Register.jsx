import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Box, Button, Stack, TextField } from '@mui/material';

export const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <TextField
          type="text"
          name="name"
          autoFocus
          required
          id="outlined-name"
          label="Username"
        />
        <TextField
          type="email"
          name="email"
          required
          id="outlined-email"
          label="Email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          minLength="7"
          required
          
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Stack>
    </Box>
  );
};
