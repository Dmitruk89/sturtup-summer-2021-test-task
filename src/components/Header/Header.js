import styles from './Header.module.scss';
import logo from '../../assets/Logo.png';
import SearchFieldContainer from '../common/SearchField/SearchFieldContainer';

function Header(props) {
  return (
    <div className={styles.header}>
        <img alt='logo' src={logo} />
        <SearchFieldContainer />
        {/* <SearchField 
          inputValue={props.inputValue} 
          inputChange={props.inputChange}
          toggleIsFetching={props.toggleIsFetching}
          toggleShowProfile={props.toggleShowProfile}
          toggleShowEmpty={props.toggleShowEmpty}
          setUserData={props.setUserData}
          setUserRepos={props.setUserRepos}
          clearInput={props.clearInput}
          currentPage={props.currentPage}
          perPage={props.perPage}
          /> */}
    </div>
  );
}

export default Header;