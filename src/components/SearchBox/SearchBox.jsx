import { useId } from 'react';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

function SearchBox() {
  const searchFieldId = useId();

  const dispatch = useDispatch();

  function handleOnChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={css.div}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchFieldId}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default SearchBox;
