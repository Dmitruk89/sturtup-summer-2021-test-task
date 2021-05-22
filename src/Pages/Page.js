import styles from './Page.module.scss';
import DefaultPage from './DefaultPage/DefaultPage';


function Page() {
  return (
    <div className={styles.page}>
        <DefaultPage />
    </div>
  );
}

export default Page;