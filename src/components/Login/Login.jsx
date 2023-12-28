import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Box, Button, Stack, TextField } from '@mui/material';

export const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      login({ email: e.target.email.value, password: e.target.password.value })
    );
    e.target.reset();
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
      </Stack>
    </Box>
  );
};
