import React from 'react';
import { connect } from "react-redux";
import { inputChange, toggleIsFetching, clearInput } from '../../../redux/headerReducer';
import { 
    toggleShowProfile, 
    toggleShowEmpty, 
    setUserData,
    setCurrentPage,
    setUserRepos
} from '../../../redux/profileReducer';
import SearchField from './SearchField';
import { usersAPI } from '../../../api/api';

class SearchFieldContainer extends React.Component{
    onSearchQuery = () => {
        this.props.setCurrentPage(1);
        this.props.clearInput();
        this.props.toggleIsFetching();
        usersAPI.getProfile(this.props.inputValue)
        .then(data => {
          if (data) {
          this.props.toggleIsFetching();
          this.props.toggleShowProfile(true);
          this.props.toggleShowEmpty(false);
          this.props.setUserData({
            avatar: data.avatar_url,
            fullName: data.name,
            linkName: data.login,
            linkUrl: data.html_url,
            followers: data.followers,
            following: data.following,
            repos: data.public_repos,
          })
          } else {
            this.props.toggleIsFetching();
            this.props.toggleShowProfile(false);
            this.props.toggleShowEmpty(true);
          }
        })
        
        usersAPI.getRepos(this.props.inputValue, 1, this.props.perPage)
        .then(data => {
          if (data) {
          this.props.setUserRepos(data);
        } else {
          this.props.setUserRepos([]);
        }
        })
      }
    
    render(){
      return <SearchField
        onSearchQuery={this.onSearchQuery}
        inputValue={this.props.inputValue}
        inputChange={this.props.inputChange}
        />
    }

}

const mapStateToProps = (state) => ({
    inputValue: state.header.inputValue,
    currentPage: state.profile.currentPage,
    perPage: state.profile.perPage,
})

export default connect(mapStateToProps, {
    inputChange,
    toggleIsFetching,
    toggleShowProfile,
    toggleShowEmpty,
    setUserData,
    setUserRepos,
    clearInput,
    setCurrentPage
})(SearchFieldContainer);