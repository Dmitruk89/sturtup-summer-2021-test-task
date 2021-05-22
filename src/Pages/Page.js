import styles from './Page.module.scss';
import DefaultPage from './DefaultPage/DefaultPage';
import EmptyStatePage from './EmptyStatePage/EmptyStatePage';
import ProfilePage from './ProfilePage/ProfilePage';


function Page() {
  return (
    <div className={styles.page}>
        {/* <DefaultPage /> */}
        {/* <EmptyStatePage /> */}
        <ProfilePage />
    </div>
  );
}

export default Page;