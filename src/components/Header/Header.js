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
          toggleIsFetching={props.toggleIsFetching}
          toggleShowProfile={props.toggleShowProfile}
          toggleHasUser={props.toggleHasUser}
          setUserData={props.setUserData}
          />
    </div>
  );
}

export default Header;