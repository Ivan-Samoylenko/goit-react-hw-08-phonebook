import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components';

const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
