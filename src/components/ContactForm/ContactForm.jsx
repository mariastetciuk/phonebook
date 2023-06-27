import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/ContactsSlice/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.target;

    if (
      items.find(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(`${form.elements.name.value} is already in contacts.`);
      return;
    }

    dispatch(
      addContactThunk({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label} htmlFor="">
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor="">
        <input
          className={css.input}
          type="tel"
          name="number"
          placeholder="Number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <input className={css.btn} type="submit" value="Add contact" />
    </form>
  );
};
