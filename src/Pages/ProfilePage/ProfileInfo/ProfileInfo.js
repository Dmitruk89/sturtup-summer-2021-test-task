import styles from './ProfileInfo.module.scss';
import avatar from '../../../assets/avatar.png';
import followers from '../../../assets/icon/followers.png';
import following from '../../../assets/icon/following.png'

function ProfileInfo() {
  return (
    <div className={styles.profileInfo}>
        <div className={styles.profileCard}>
            <img alt="profile" src={avatar}/>
            <h2>Dan Abramov</h2>
            <a href="https://github.com/Dmitruk89">gaearon</a>
            <div className={styles.followInfo}>
                <div className={styles.followers}>
                    <img alt="followers" src={followers} />
                    <p><span>65.8k </span>followers</p>
                </div>
                <div className={styles.followers}>
                    <img alt="following" src={following} />
                    <p><span>171 </span>following</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default ProfileInfo;