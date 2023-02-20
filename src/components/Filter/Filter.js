import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contacts/actions';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="header text-center p-1">Contacts</h2>
      <Form
        className="justify-content-center p-1 mx-auto mt-1"
        style={{ width: '25rem' }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="text"
            name="filter"
            placeholder="Search..."
            onChange={event =>
              dispatch(changeFilter(event.target.value.trim()))
            }
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Filter;