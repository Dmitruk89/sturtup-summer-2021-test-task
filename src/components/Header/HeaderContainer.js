import React from 'react';
import { connect } from "react-redux";
import { inputChange, toggleIsFetching } from '../../redux/headerReducer';
import Header from './Header';

class HeaderContainer extends React.Component{

    render(){
      return <Header 
        inputValue={this.props.inputValue}
        inputChange={this.props.inputChange}
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
})(HeaderContainer);