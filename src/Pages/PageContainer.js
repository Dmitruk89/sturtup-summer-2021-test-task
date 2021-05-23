import React from 'react';
import { connect } from "react-redux";
import Page from './Page';

class PageContainer extends React.Component{

    render(){
      return <Page 
        showProfile={this.props.showProfile}
        showEmpty={this.props.showEmpty}
        profile={this.props.profile}
        repositories={this.props.repositories}
        isFetching={this.props.isFetching}
        />
    }

}

const mapStateToProps = (state) => ({
    showProfile: state.profile.showProfile,
    showEmpty: state.profile.showEmpty,
    profile: state.profile.profile,
    repositories: state.profile.repositories,
    isFetching: state.header.isFetching
})

export default connect(mapStateToProps, {
    
})(PageContainer);