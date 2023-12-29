import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Alert, Box, Button, Stack, TextField } from '@mui/material';
import { selectAuthError } from '../../redux/auth/selectors';
import { Helmet } from 'react-helmet';

export const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      login({ email: e.target.email.value, password: e.target.password.value })
    );
    e.target.reset();
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
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
            type="email"
            name="email"
            autoFocus
            required
            id="outlined-email"
            label="Email"
            fullWidth
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            minLength="7"
            required
            fullWidth
          />
          <Box sx={{}}>
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </Box>
          {error && <Alert severity="error">{error}</Alert>}
        </Stack>
      </Box>
    </>
  );
};
