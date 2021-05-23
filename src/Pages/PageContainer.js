import React from 'react';
import { connect } from "react-redux";
import Page from './Page';

class PageContainer extends React.Component{

    render(){
      return <Page 
        showProfile={this.props.showProfile}
        hasUser={this.props.hasUser}
        profile={this.props.profile}
        repositories={this.props.repositories}
        />
    }

}

const mapStateToProps = (state) => ({
    showProfile: state.profile.showProfile,
    hasUser: state.profile.hasUser,
    profile: state.profile.profile,
    repositories: state.profile.repositories,
})

export default connect(mapStateToProps, {
    
})(PageContainer);