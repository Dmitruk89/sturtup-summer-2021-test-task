import React from 'react';
import { connect } from "react-redux";
import Paginator from './Paginator';
import { setCurrentPage, setUserRepos } from '../../../redux/profileReducer';
import { usersAPI } from '../../../api/api';

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
      currentPage={this.props.currentPage}
      perPage={this.props.perPage}
      totalRepos={this.props.totalRepos}
      onPageChange={this.onPageChange}
      />
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