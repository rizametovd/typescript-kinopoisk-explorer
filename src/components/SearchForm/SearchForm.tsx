import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSearchPageAction } from '../../store/actionCreators/searchMovieActionCreators';
import { searchMovie } from '../../utils/api';
import { SEARCH_PAGE } from '../../utils/constants';
import styles from './styles.module.css';

const SearchForm: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useDispatch()
  const history = useHistory();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setKeyword(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    
    dispatch(searchMovie(keyword));
    history.push(`/${SEARCH_PAGE}`)
    setKeyword('');
    dispatch(setSearchPageAction(1));
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={handleChange}
          value={keyword}
          placeholder='Название фильма'
          autoComplete='off'
        />
        <button className={styles.submitButton} type='submit' />
      </form>
    </div>
  );
};

export default SearchForm;
