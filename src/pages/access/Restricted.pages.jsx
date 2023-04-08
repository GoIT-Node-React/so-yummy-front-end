import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/auth.selectors';
import { AccessPropTypes } from './Access.props';
import { routes } from 'constants/routes';
import { Suspense } from 'react';

export default function RestrictedPage({
  component: Component,
  redirect = routes.MAIN_PAGE,
}) {
  const location = useLocation();
  const to = location.state?.from || redirect;
  const isAuthenticated = useSelector(selectAccessToken);

  return isAuthenticated ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    <Suspense fallback={<h2>Loading...</h2>}>{Component}</Suspense>
  );
}

RestrictedPage.propTypes = AccessPropTypes;
