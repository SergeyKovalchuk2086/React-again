import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfileThunk } from "../../redux/profileReducer";
import { useLocation, useParams } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();

        return (
            <Component { ...props } router = {{ location, params }} />
        )
    }

    return ComponentWithRouterProp
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getProfileThunk(this.props.router.params.userId)
    }

    render() {
        return (
            <Profile { ...this.props } />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
    }

}

export default connect(mapStateToProps, {
    getProfileThunk
})(withRouter(ProfileContainer));
