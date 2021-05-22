import styles from './EmptyStatePage.module.scss';
import userIconBig from '../../assets/icon/user-big.png';


function EmptyStatePage() {
  return (
    <div className={styles.emptyStatePage}>
     <div className={styles.emptyStateContent}>
         <img alt="search-icon" src={userIconBig}/>
         <p>User not found</p>
     </div>
    </div>
  );
}

export default EmptyStatePage;