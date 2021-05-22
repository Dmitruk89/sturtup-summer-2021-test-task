import styles from './Header.module.scss';
import logo from '../../assets/Logo.png';
import SearchField from '../common/SearchField/SearchField';

function Header(props) {
  return (
    <div className={styles.header}>
        <img alt='logo' src={logo} />
        <SearchField 
          inputValue={props.inputValue} 
          inputChange={props.inputChange}
          />
    </div>
  );
}

export default Header;