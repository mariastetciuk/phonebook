import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useSelector(getAuth);
  return (
    <div className={css.wrapper}>
      <p>{user.name}</p>
      <button>Logout</button>
    </div>
  );
};
export default UserMenu;
