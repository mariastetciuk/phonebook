import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/ContactsSlice/operations';
import { getAuth } from 'redux/selectors';

const Contacts = () => {
  const { isLoggedIn } = useSelector(getAuth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getContactsThunk());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {<Filter />}
      <ContactList />
    </>
  );
};

export default Contacts;
