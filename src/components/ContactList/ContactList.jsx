import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/ContactsSlice/operations';
import { GoTrash } from 'react-icons/go';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const { items } = useSelector(getContacts);

  const filterContact = () => {
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contacts = filterContact();

  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contacts__item} key={id}>
            <p className={css.text}> {name}:</p>
            <span className={css.contacts__span}>{number}</span>
            <button
              className={css.contacts__btn}
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(id));
              }}
            >
              <GoTrash fontSize="30px" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
