import styles from './ProfilePage.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileRepos from './ProfileRepos/ProfileRepos';
import NoRepos from './ProfileRepos/NoRepos';

function ProfilePage() {
  return (
    <div className={styles.profilePage}>
        <ProfileInfo />
        {/* <ProfileRepos /> */}
        <NoRepos />
    </div>
  );
}

export default ProfilePage;