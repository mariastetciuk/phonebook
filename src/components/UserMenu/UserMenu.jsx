import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import css from './UserMenu.module.css';
import { logoutThunk } from 'redux/AuthSlice/operations';
import { GoPersonFill, GoSignOut } from 'react-icons/go';

const UserMenu = () => {
  const { user } = useSelector(getAuth);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={css.wrapper}>
      <GoPersonFill fontSize="40px" fill="white" />
      <p className={css.text}>{user.name}</p>
      <button className={css.btn} onClick={handleClick} type="button">
        <span> Logout</span>
        <GoSignOut fontSize="25px" fill="white" />
      </button>
    </div>
  );
};
export default UserMenu;
