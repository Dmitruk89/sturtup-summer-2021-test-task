import styles from './DefaultPage.module.scss';
import searchBig from '../../assets/icon/search-big.png';


function DefaultPage() {
  return (
    <div className={styles.defaultPage}>
     <div className={styles.defaultContent}>
         <img alt="search-icon" src={searchBig}/>
         <p>Start with searching a GitHub user</p>
     </div>
    </div>
  );
}

export default DefaultPage;