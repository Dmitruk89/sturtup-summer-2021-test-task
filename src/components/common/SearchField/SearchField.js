import styles from './SearchField.module.scss';
import searchIcon from '../../../assets/icon/search.png'


function SearchField() {
  return (
    <div className={styles.searchField}>
        <input type='search' />
        <img alt='search-icon' src={searchIcon} />
    </div>
  );
}

export default SearchField;