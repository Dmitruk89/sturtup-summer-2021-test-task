import styles from './ProfilePage.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileRepos from './ProfileRepos/ProfileRepos';
import NoRepos from './ProfileRepos/NoRepos';

function ProfilePage(props) {
  return (
    <div className={styles.profilePage}>
        <ProfileInfo profile={props.profile}/>
        {props.repositories.length > 0 ?
        <ProfileRepos totalRepos={props.profile.repos} repositories={props.repositories}/> :
        <NoRepos />
      }
    </div>
  );
}

export default ProfilePage;