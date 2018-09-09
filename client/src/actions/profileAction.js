import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  PROFILE_SUBMISSION,
  GET_PROFILES,
  GET_ERRORS,
  ADD_SOCIAL_LINKS
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

export const failSubmission = errors => {
  return {
    type: GET_ERRORS,
    errors
  };
};

export const addSocialLinks = () => {
  return {
    type: ADD_SOCIAL_LINKS
  };
};

export const submitProfile = (profileSubmission, history) => dispatch => {
  const {
    handle,
    status,
    company,
    website,
    location,
    skills,
    githubUsername,
    bio
  } = profileSubmission.target;
  axios
    .post("/api/profile", profileSubmission)
    .then(result => history.push("/dashboard"))
    .catch(errors => {
      dispatch(failSubmission(errors));
    });
  // return {
  //   type: PROFILE_SUBMISSION,
  //   payload: profile
  // };
};
