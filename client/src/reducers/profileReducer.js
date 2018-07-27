import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES,
  GET_ERRORS
} from "./../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false // to show spinner
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE:
      return { ...state, loading: false, profile: action.payload };
    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
}
export default reducer;
