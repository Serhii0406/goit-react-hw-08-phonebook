import { Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';

import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactSlice';
import Spinner from 'components/Spinner/Spinner';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const onChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.toLowerCase());
        break;

      case 'number':
        setNumber(value.toLowerCase());
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };

    contacts.some(contact => contact.name === newContact.name)
      ? window.alert('The contact added in the list')
      : createContact(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <h1 className="header text-center p-1 mt-1">Phonebook</h1>
      <Card
        className="justify-content-center p-1 mx-auto mt-2"
        style={{ width: '25rem' }}
      >
        <Form className="mb-3 p-2" onSubmit={onHandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={onChange}
              required
            />
          </Form.Group>

          {isLoading ? (
            <Spinner />
          ) : (
            <Button size="lg" variant="outline-primary" type="submit">
              Add contact
            </Button>
          )}
        </Form>
      </Card>
    </>
  );
}