import styles from './Paginator.module.scss';


function Paginator(props) {
    const totalPages = Math.ceil(props.totalRepos / props.perPage);
    let itemFrom = (props.currentPage - 1) * props.perPage + 1;
    let itemTo = itemFrom + props.perPage - 1;
    if(itemTo > props.totalRepos){
        itemTo = props.totalRepos
    }
    const pages = [];
    const prevButton = '<';
    const nextButton = '>';

    for (let i = 1; i <= totalPages; i ++){
        pages.push(i);
    }    

  return (
    <div className={styles.paginator}>
       <span>{itemFrom}-{itemTo} of {props.totalRepos} items</span>
       <button
        onClick={ () => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1} 
        className={styles.button}
        >{prevButton}</button>
       {pages.map(i => {
            return <span 
            onClick={() => props.onPageChange(i)} 
            key={i} 
            className={props.currentPage === i ? styles.currentPage : styles.page}>{i}</span>
        })}
        <button
            onClick={ () => props.onPageChange(props.currentPage + 1)}
            disabled={props.currentPage === totalPages} 
            className={styles.button}
            >{nextButton}</button>
    </div>
  );
}

export default Paginator;