import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './contacts.module.css';

const Contacts = () => {
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
