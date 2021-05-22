import styles from './ProfileRepos.module.scss';
import Repository from './Repository/Repository';

function ProfileRepos() {
  return (
    <div className={styles.profileRepos}>
        <h2>Repositories (249)</h2>
        <Repository />
    </div>
  );
}

export default ProfileRepos;