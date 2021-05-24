import React from 'react';
import { connect } from "react-redux";
import Paginator from './Paginator';
import { setCurrentPage, setUserRepos } from '../../../redux/profileReducer';
import { usersAPI } from '../../../api/api';

class PaginatorContainer extends React.Component{

    onPageChange = (page) => {
        usersAPI.getRepos(this.props.profileName, page, this.props.perPage)
            .then(data => {
              if (data) {
              this.props.setUserRepos(data);
            } else {
              console.log('no data');
            }
            })
        this.props.setCurrentPage(page);
    }

    render(){
      return <Paginator
        onPageChange={this.onPageChange}
        repositories={this.props.repositories}
        setCurrentPage={this.props.setCurrentPage}
        currentPage={this.props.currentPage}
        perPage={this.props.perPage}
        totalRepos={this.props.totalRepos}
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