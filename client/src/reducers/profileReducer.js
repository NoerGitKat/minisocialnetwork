import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  ADD_SOCIAL_LINKS,
  GET_PROFILES,
  GET_ERRORS
} from "./../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  showSocialLinks: false,
  loading: false // to show spinner
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE:
      return { ...state, loading: false, profile: action.payload };
    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };
    case ADD_SOCIAL_LINKS:
      return { ...state, showSocialLinks: !state.showSocialLinks };
    default:
      return state;
  }
}
export default reducer;
