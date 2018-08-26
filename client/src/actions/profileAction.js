import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  PROFILE_SUBMISSION,
  GET_PROFILES,
  GET_ERRORS
} from "./types";

import axios from "axios";

// Get current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res => dispatch(setProfile(res.data)))
    .catch(err => {
      dispatch(setProfile({}));
      console.log("err", err);
    });
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Set profile
export const setProfile = profile => {
  return {
    type: GET_PROFILE,
    payload: profile
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const submitProfile = profileSubmission => {
  console.log("profileSubmission action", profileSubmission.target);

  // return {
  //   type: PROFILE_SUBMISSION,
  //   payload: profile
  // };
};
