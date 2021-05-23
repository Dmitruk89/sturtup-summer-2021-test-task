import styles from './SearchField.module.scss';
import searchIcon from '../../../assets/icon/search.png';
import {usersAPI} from '../../../api/api';


function SearchField(props) {
  return (
    <div className={styles.searchField}>
      <form onSubmit={(e) => {
            e.preventDefault();
            props.toggleIsFetching();
            usersAPI.getProfile(props.inputValue)
            .then(data => {
              console.log(data);
              props.toggleIsFetching();
              props.toggleHasUser();
              props.toggleShowProfile();
              props.setUserData({
                avatar: data.avatar_url,
                fullName: data.name.split('.').join(' '),
                linkName: data.login,
                linkUrl: data.html_url,
                followers: data.followers,
                following: data.following,
                repos: data.public_repos,
              })
            })
            usersAPI.getRepos(props.inputValue, 1, 5)
            .then(data => {
              console.log(data);
              props.setUserRepos(data);
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