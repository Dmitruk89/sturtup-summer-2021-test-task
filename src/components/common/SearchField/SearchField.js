import styles from './SearchField.module.scss';
import searchIcon from '../../../assets/icon/search.png'


function SearchField(props) {
  return (
    <div className={styles.searchField}>
        <input 
          type="search" 
          value={props.inputValue} 
          onChange={(e) => props.inputChange(e.target.value)}
          placeholder="Enter GitHub username" />
        <img alt="search-icon" src={searchIcon} />
    </div>
  );
}

export default SearchField;