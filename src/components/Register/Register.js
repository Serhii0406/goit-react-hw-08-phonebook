import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations } from '../../redux/auth';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Card
      className="justify-content-center p-3 mx-auto mt-5"
      style={{ width: '25rem' }}
    >
      <Form className="mb-3 p-2" onSubmit={handleSubmit}>
        <h2 className="mb-3 p-2 text-center">Registration</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            placeholder="Your name"
            autoFocus
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="name@example.com"
            required
            onChange={handleChange}
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
        <Form.Group className="mb-3 text-center">
          <Button variant="outline-primary" type="submit" className="ms-auto">
            Register
          </Button>
        </Form.Group>
        <Form.Group className="text-center">
          <Button
            variant="outline-primary"
            type="button"
            className="ms-auto"
            onClick={() => navigate('/login')}
          >
            I am already registered
          </Button>
        </Form.Group>
      </Form>
    </Card>
  );
};

export default Register;