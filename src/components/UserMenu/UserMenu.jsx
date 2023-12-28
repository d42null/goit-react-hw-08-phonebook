import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/LogoutTwoTone';
import { AccountCircle } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      ></IconButton>
      <AccountCircle />
      <Typography textAlign="center">{email}</Typography>
      <IconButton
        color="primary"
        aria-label="Logout"
        onClick={() => dispatch(logout())}
      >
        <LogoutIcon />
      </IconButton>
    </>
  );
};
