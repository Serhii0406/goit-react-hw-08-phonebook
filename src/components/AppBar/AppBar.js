import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Spinner from '../Spinner/Spinner';
import Navigation from 'components/Navigation/Navigation';

export default function AppBar() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}