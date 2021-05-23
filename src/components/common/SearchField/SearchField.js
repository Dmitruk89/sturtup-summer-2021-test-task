import styles from './SearchField.module.scss';
import searchIcon from '../../../assets/icon/search.png';
import {usersAPI} from '../../../api/api';


function SearchField(props) {
  return (
    <div className={styles.searchField}>
      <form onSubmit={(e) => {
            e.preventDefault();
            props.clearInput();
            props.toggleIsFetching();
            usersAPI.getProfile(props.inputValue)
            .then(data => {
              if (data) {
              props.toggleIsFetching();
              props.toggleShowProfile(true);
              props.toggleShowEmpty(false);
              props.setUserData({
                avatar: data.avatar_url,
                fullName: data.name.split('.').join(' '),
                linkName: data.login,
                linkUrl: data.html_url,
                followers: data.followers,
                following: data.following,
                repos: data.public_repos,
              })
              } else {
                props.toggleIsFetching();
                props.toggleShowProfile(false);
                props.toggleShowEmpty(true);
              }
              
            })
            usersAPI.getRepos(props.inputValue, 1, 5)
            .then(data => {
              if (data) {
              props.setUserRepos(data);
            } else {
              console.log('no data');
            }
            })
          }}>
        <input 
          type="search" 
          value={props.inputValue} 
          onChange={(e) => props.inputChange(e.target.value)}
          
          placeholder="Enter GitHub username" />
        </form>
        <img alt="search-icon" src={searchIcon} />
    </div>
  );
}

export default SearchField;