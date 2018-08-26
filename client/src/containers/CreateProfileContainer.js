import React from "react";
import { connect } from "react-redux";
import CreateProfile from "./../components/create-profile/CreateProfile";
import { submitProfile } from "./../actions/profileAction";

class CreateProfileCompose extends React.Component {
  render() {
    return <CreateProfile {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    submitProfile: profileSubmission => {
      dispatch(submitProfile(profileSubmission));
    }
  };
};

const CreateProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfileCompose);

export default CreateProfileContainer;
