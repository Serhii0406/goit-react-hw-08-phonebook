import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations } from '../../redux/auth';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    navigate('/');
  };

  return (
    <Card
      className="justify-content-center p-3 mx-auto mt-5"
      style={{ width: '25rem' }}
    >
      <h2 className="mb-3 p-2 text-center">Sign In</h2>
      <Form className="mb-3 p-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="passsword"
            name="password"
            value={password}
            placeholder="Passsword"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="text-center">
          <Button variant="outline-primary" type="submit" className="ms-auto">
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </Card>
  );
};
export default Login;