import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
// import { GoPersonAdd } from 'react-icons/go';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const hendleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <div className={css.wrapper}>
      <label htmlFor="">
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={hendleFilterChange}
        />
      </label>
      {/* <button className={css.btn}>
        <GoPersonAdd fontSize="30px" fill="black" />
      </button> */}
    </div>
  );
}
