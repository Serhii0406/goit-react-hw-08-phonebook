import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import Spinner from 'components/Spinner/Spinner';
import { getFilter, getContactsFilter } from 'redux/contacts/contactsSelectors';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import ContactItem from '../ContactsItem/ContactsItem';
import { authSelectors } from 'redux/auth';

const ContactList = () => {
  const { data, isFetching, refetch } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const contacts = getContactsFilter(filter, data);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [refetch, isLoggedIn]);

  return (
    <>
      <ListGroup
        className="justify-content-center p-1 mx-auto mt-2"
        style={{ width: '25rem' }}
      >
        {isFetching && <Spinner />}
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
      </ListGroup>
    </>
  );
};

export default ContactList;