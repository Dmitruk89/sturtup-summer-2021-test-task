import styles from './Repository.module.scss';

function Repository() {
  return (
    <div className={styles.repository}>
        <h3>repository-name</h3>
        <p>repository description</p>
    </div>
  );
}

export default Repository;