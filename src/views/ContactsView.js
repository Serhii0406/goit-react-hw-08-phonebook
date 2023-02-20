import ContactForm from 'components/ContactsForm/ContactsForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsView = () => {
  return (
    <>
        <ContactForm />
        <Filter />
        <ContactList />
    </>
  );
};

export default ContactsView;