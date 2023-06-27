import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/ContactsSlice/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <>
      {/* <h2 className={css.title}>Phonebook</h2> */}
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {<Filter />}
      <ContactList />
    </>
  );
};

export default Contacts;
