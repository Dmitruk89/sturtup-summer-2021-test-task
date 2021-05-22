import styles from './Page.module.scss';
import DefaultPage from './DefaultPage/DefaultPage';
import EmptyStatePage from './EmptyStatePage/EmptyStatePage';


function Page() {
  return (
    <div className={styles.page}>
        {/* <DefaultPage /> */}
        <EmptyStatePage />
    </div>
  );
}

export default Page;