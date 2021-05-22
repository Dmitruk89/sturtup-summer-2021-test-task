import styles from './Header.module.scss';
import logo from '../../assets/Logo.png';
import SearchField from '../common/SearchField/SearchField';

function Header() {
  return (
    <div className={styles.header}>
        <img alt='logo' src={logo} />
        <SearchField />
    </div>
  );
}

export default Header;