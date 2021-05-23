import styles from './Page.module.scss';
import DefaultPage from './DefaultPage/DefaultPage';
import EmptyStatePage from './EmptyStatePage/EmptyStatePage';
import ProfilePage from './ProfilePage/ProfilePage';
import Loader from '../components/common/Loader/Loader';

function Page(props) {
  return (
    <div className={styles.page}>
      {
      props.isFetching ?
      <Loader /> :
      props.showEmpty ?
      <EmptyStatePage /> :
      props.showProfile ?
      <ProfilePage 
        profile={props.profile}
        repositories={props.repositories}
        /> :
      <DefaultPage />
      }
    </div>
  );
}

export default Page;