import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout, RestrictedRoute, PrivateRoute } from 'components';

const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={RegisterPage}
              redirectTo={'/contacts'}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo={'/contacts'} />
          }
        />
      </Route>
    </Routes>
  );
}
