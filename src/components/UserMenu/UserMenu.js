import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors, authOperations } from '../../redux/auth';

import Button from 'react-bootstrap/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <h2 className="align-middle important!">Welcome, {name}</h2>
      <Button
        className="ms-5"
        variant="outline-primary"
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
          navigate('/login');
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;