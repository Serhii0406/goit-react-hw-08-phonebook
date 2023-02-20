import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import AppBar from 'components/AppBar/AppBar';

const HomeView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));
const Register = lazy(() => import('components/Register/Register'));
const Login = lazy(() => import('components/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              exact
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      )}
    </>
  );
};