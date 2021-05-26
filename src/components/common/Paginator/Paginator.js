import styles from './Paginator.module.scss';
import ReactPaginate from 'react-paginate';


function Paginator(props) {
    const totalPages = Math.ceil(props.totalRepos / props.perPage);
    let itemFrom = (props.currentPage - 1) * props.perPage + 1;
    let itemTo = itemFrom + props.perPage - 1;
    if(itemTo > props.totalRepos){
        itemTo = props.totalRepos
    }

  return (
    <div className={styles.paginatorContainer}>
       <span>{itemFrom}-{itemTo} of {props.totalRepos} items</span>
       <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={props.onPageChange}
      containerClassName={styles.paginator}
      pageClassName={styles.page}
      activeClassName={styles.currentPage}
      nextClassName={styles.button}
      previousLinkClassName={styles.button}
      disabledClassName={styles.disabled}
    />
    </div>
  );
}

export default Paginator;