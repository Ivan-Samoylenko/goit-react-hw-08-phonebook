import { useState } from 'react';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const [isFirstSession, setIsFirstSession] = useState(true);

  useEffect(() => {
    if (isFirstSession) setIsFirstSession(false);
  }, [isFirstSession, setIsFirstSession]);

  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn && !isFirstSession;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
