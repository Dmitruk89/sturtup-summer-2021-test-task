import styles from './Repository.module.scss';

function Repository(props) {
  return (
    <div className={styles.repository}>
      <a rel="noreferrer" target="_blank" href={props.repository.html_url}><h3>{props.repository.name}</h3></a>
        <p>{props.repository.description}</p>
    </div>
  );
}

export default Repository;