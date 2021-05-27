import styles from './Header.module.scss';
import logo from '../../assets/Logo.png';
import SearchFieldContainer from '../common/SearchField/SearchFieldContainer';

function Header() {
  return (
    <div className={styles.header}>
        <img alt='logo' src={logo} />
        <SearchFieldContainer />
    </div>
  );
}

export default Header;