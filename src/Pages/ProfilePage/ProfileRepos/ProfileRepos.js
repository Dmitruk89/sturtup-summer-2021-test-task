import styles from './ProfileRepos.module.scss';
import Repository from './Repository/Repository';

function ProfileRepos(props) {
  return (
    <div className={styles.profileRepos}>
        <h2>Repositories ({props.totalRepos})</h2>
        {props.repositories.map(repo => <Repository key={repo.id} repository={repo} />)}
        
    </div>
  );
}

export default ProfileRepos;