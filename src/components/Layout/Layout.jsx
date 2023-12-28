import { Toaster } from 'react-hot-toast';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Layout = () => (
  <Container maxWidth="sm">
    <Navigation />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <Toaster position="top-right" reverseOrder={false} />
  </Container>
);
