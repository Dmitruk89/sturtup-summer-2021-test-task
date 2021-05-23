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
          toggleShowEmpty={props.toggleShowEmpty}
          setUserData={props.setUserData}
          setUserRepos={props.setUserRepos}
          clearInput={props.clearInput}
          />
    </div>
  );
}

export default Header;