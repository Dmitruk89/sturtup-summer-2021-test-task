import styles from './NoRepos.module.scss';
import noRepos from '../../../assets/icon/noRepos.png';


function NoRepos() {
  return (
    <div className={styles.noRepos}>
     <div className={styles.noReposContent}>
         <img alt="no-repositories" src={noRepos}/>
         <p>Repository list is empty</p>
     </div>
    </div>
  );
}

export default NoRepos;