import styles from './ProfileRepos.module.scss';
import Repository from './Repository/Repository';
import PaginatorContainer from '../../../components/common/Paginator/PaginatorContainer';

function ProfileRepos(props) {
  return (
    <div className={styles.profileRepos}>
        <h2>Repositories ({props.totalRepos})</h2>
        <div className={styles.repositories}>
          {props.repositories.map(repo => <Repository key={repo.id} repository={repo} />)}
        </div>
        {props.totalRepos > 0 ? <PaginatorContainer /> : null}
    </div>
  );
}

export default ProfileRepos;