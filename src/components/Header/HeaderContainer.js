import React from 'react';
import { connect } from "react-redux";
import { inputChange, toggleIsFetching, clearInput } from '../../redux/headerReducer';
import { 
    toggleShowProfile, 
    toggleShowEmpty, 
    setUserData, 
    setUserRepos
} from '../../redux/profileReducer';
import Header from './Header';

class HeaderContainer extends React.Component{

    render(){
      return <Header 
        inputValue={this.props.inputValue}
        inputChange={this.props.inputChange}
        toggleIsFetching={this.props.toggleIsFetching}
        toggleShowProfile={this.props.toggleShowProfile}
        toggleShowEmpty={this.props.toggleShowEmpty}
        setUserData={this.props.setUserData}
        setUserRepos={this.props.setUserRepos}
        clearInput={this.props.clearInput}
        currentPage={this.props.currentPage}
        perPage={this.props.perPage}
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
    clearInput
})(HeaderContainer);