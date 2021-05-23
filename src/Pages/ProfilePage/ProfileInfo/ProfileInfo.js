import styles from './ProfileInfo.module.scss';
import followers from '../../../assets/icon/followers.png';
import following from '../../../assets/icon/following.png'

function ProfileInfo(props) {
  return (
    <div className={styles.profileInfo}>
        <div className={styles.profileCard}>
            <img alt="profile" src={props.profile.avatar}/>
            <h2>{props.profile.fullName}</h2>
            <a rel="noreferrer" target="_blank" href={props.profile.linkUrl}>{props.profile.linkName}</a>
            <div className={styles.followInfo}>
                <div className={styles.followers}>
                    <img alt="followers" src={followers} />
                    <p><span>{props.profile.followers} </span>followers</p>
                </div>
                <div className={styles.followers}>
                    <img alt="following" src={following} />
                    <p><span>{props.profile.following} </span>following</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default ProfileInfo;