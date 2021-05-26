import React from 'react';
import { connect } from "react-redux";
import Paginator from './Paginator';
import { setCurrentPage, setUserRepos } from '../../../redux/profileReducer';
import { usersAPI } from '../../../api/api';
import styles from './Paginator.module.scss';

class PaginatorContainer extends React.Component{
    onPageChange = (page) => {
      const pageNumber = page.selected + 1;
        usersAPI.getRepos(this.props.profileName, pageNumber, this.props.perPage)
            .then(data => {
              if (data) {
              this.props.setUserRepos(data);
            } else {
              console.log('no data');
            }
            })
        this.props.setCurrentPage(pageNumber);
    }

    render(){
      return <Paginator 
      repositories={this.props.repositories}
      currentPage={this.props.currentPage}
      perPage={this.props.perPage}
      totalRepos={this.props.totalRepos}
      profileName={this.props.profileName}
      setCurrentPage={this.props.setCurrentPage}
      setUserRepos={this.props.setUserRepos}
      onPageChange={this.onPageChange}
      />
    //   <ReactPaginate
    //   previousLabel={'<'}
    //   nextLabel={'>'}
    //   breakLabel={'...'}
    //   breakClassName={'break-me'}
    //   pageCount={Math.ceil(this.props.totalRepos / this.props.perPage)}
    //   marginPagesDisplayed={1}
    //   pageRangeDisplayed={2}
    //   onPageChange={this.onPageChange}
    //   containerClassName={styles.paginator}
    //   pageClassName={styles.page}
    //   activeClassName={styles.currentPage}
    //   nextClassName={styles.button}
    //   previousLinkClassName={styles.button}
    //   disabledClassName={styles.disabled}
    // />
    }

}

const mapStateToProps = (state) => ({
    repositories: state.profile.repositories,
    currentPage: state.profile.currentPage,
    perPage: state.profile.perPage,
    totalRepos: state.profile.profile.repos,
    profileName: state.profile.profile.linkName,
})

export default connect(mapStateToProps, {
    setCurrentPage,
    setUserRepos
})(PaginatorContainer);