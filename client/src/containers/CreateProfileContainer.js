import React from "react";
import { connect } from "react-redux";
import CreateProfile from "./../components/create-profile/CreateProfile";
import {
  submitProfile,
  failSubmission,
  addSocialLinks
} from "./../actions/profileAction";

class CreateProfileCompose extends React.Component {
  render() {
    return <CreateProfile {...this.props} />;
  }

  componentWillReceiveNextProps(nextProps) {
    const { failSubmission } = this.props;
    if (nextProps.errors) {
      failSubmission(nextProps.errors);
    }
  }
}

const mapStateToProps = state => {
  const { errors, showSocialLinks } = state.profile;
  return {
    errors,
    showSocialLinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitProfile: profileSubmission => {
      dispatch(submitProfile(profileSubmission));
    },
    failSubmission: errors => {
      dispatch(failSubmission(errors));
    },
    addSocialLinks: () => {
      dispatch(addSocialLinks());
    }
  };
};

const CreateProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfileCompose);

export default CreateProfileContainer;
