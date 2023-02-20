import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={'/'} /> : children;
}