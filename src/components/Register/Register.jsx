import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Alert, Box, Button, Stack, TextField } from '@mui/material';
import { selectAuthError } from '../../redux/auth/selectors';
import { Helmet } from 'react-helmet';

export const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

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
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
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
          {error && <Alert severity="error">{error}</Alert>}
        </Stack>
      </Box>
    </>
  );
};
