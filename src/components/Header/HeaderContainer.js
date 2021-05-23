import React from 'react';
import { connect } from "react-redux";
import { inputChange, toggleIsFetching } from '../../redux/headerReducer';
import { toggleShowProfile, toggleHasUser, setUserData, setUserRepos } from '../../redux/profileReducer';
import Header from './Header';

class HeaderContainer extends React.Component{

    render(){
      return <Header 
        inputValue={this.props.inputValue}
        inputChange={this.props.inputChange}
        toggleIsFetching={this.props.toggleIsFetching}
        toggleShowProfile={this.props.toggleShowProfile}
        toggleHasUser={this.props.toggleHasUser}
        setUserData={this.props.setUserData}
        setUserRepos={this.props.setUserRepos}
        />
    }

}

const mapStateToProps = (state) => ({
    inputValue: state.header.inputValue,
    isFetching: state.header.isFetching
})

export default connect(mapStateToProps, {
    inputChange,
    toggleIsFetching,
    toggleShowProfile,
    toggleHasUser,
    setUserData,
    setUserRepos
})(HeaderContainer);