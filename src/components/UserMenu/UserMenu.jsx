import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import css from './UserMenu.module.css';
import { logoutThunk } from 'redux/AuthSlice/operations';

const UserMenu = () => {
  const { user } = useSelector(getAuth);
  const dispatch = useDispatch();
  // console.log(user);
  const handleClick = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={css.wrapper}>
      <p>{user.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
export default UserMenu;
