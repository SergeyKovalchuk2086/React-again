import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profileReducer";
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
        // let userId = this.props.router.params.userId ? this.props.router.params.userId : 2
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.userId || '2'}`)
            .then(response => {
               this.props.setUserProfile(response.data)
            })
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
    setUserProfile,
})(withRouter(ProfileContainer));
