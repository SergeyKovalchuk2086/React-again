import React from 'react';
import Header from "./Header";
import {authThunk, setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
       authThunk()
    }

    render() {
        return <Header  { ...this.props } />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)