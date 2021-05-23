import styles from './Page.module.scss';
import DefaultPage from './DefaultPage/DefaultPage';
import EmptyStatePage from './EmptyStatePage/EmptyStatePage';
import ProfilePage from './ProfilePage/ProfilePage';


function Page(props) {
  return (
    <div className={styles.page}>
      {
      props.showProfile ?
      <ProfilePage 
        profile={props.profile}
        repositories={props.repositories}
        /> :
      <DefaultPage />
      }
      {/* <EmptyStatePage /> */}
    </div>
  );
}

export default Page;